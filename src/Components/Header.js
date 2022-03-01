import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../Contexts/StateProvider";
import { signOut, getAuth } from "firebase/auth";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const openSideBar = () => {
    document.querySelector(".sideBar").classList.add("active");
    document.querySelector(".darkOverlay").classList.add("active");
  };
  const closeSideBar = () => {
    document.querySelector(".sideBar").classList.remove("active");
    document.querySelector(".darkOverlay").classList.remove("active");
  };
  const showFlyOut = () => {
    document.querySelector(".nav__flyout").classList.remove("hide");
    document.querySelector(".nav__flyout").classList.add("show");
  };
  const hideFlyOut = () => {
    document.querySelector(".nav__flyout").classList.remove("show");
    document.querySelector(".nav__flyout").classList.add("hide");
  };
  const handleSignOut = () => {
    if (user) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          window.alert("logged out");
        })
        .catch((err) => window.alert(err.message));
    }
  };
  return (
    <>
      <nav className="sideBar"></nav>
      <div className="darkOverlay" onClick={closeSideBar}>
        <span className="closeBtn"></span>
      </div>

      <div className="header">
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/G/32/BR/SSR/amazon-com-br_rgb_rev_half._CB1198675309_._SL1280_FMpng_.png"
            className="header__logo"
          />
        </Link>
        <div className="header__locationBox">
          <LocationOnOutlinedIcon
            className="header__locationIcon"
            sx={{ color: "white" }}
          />
          <div className="header__option header__locationTextBox">
            <span className="header__optionLineOne">Olá</span>
            <span className="header__optionLineTwo">Selecione o endereço</span>
          </div>
        </div>

        <div className="header__search">
          <select name="dropdown" className="header__dropDownList">
            <option value="Todos">Todos</option>
          </select>
          <input type="text" className="header__searchInput" />
          <div className="header__searchIcon">
            <SearchIcon viewBox="2 2 20 20" />
          </div>
        </div>
        <div className="header__nav">
          <div
            className="header__clickable accAndLists"
            onMouseEnter={showFlyOut}
            onMouseLeave={hideFlyOut}
          >
            <div className="nav__flyout hide">
              <div className="flyout__left flyout__column">
                <h3>Suas listas</h3>
                <a>Crie uma Lista de desejos</a>
              </div>

              <div className="flyout__right flyout__column">
                <h3>Sua conta</h3>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Sua conta
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Seus pedidos
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Sua Lista de desejos
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Recomendados para você
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Programe e Poupe
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Sua assinatura Prime
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Inscrições e assinaturas
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Sua conta
                </Link>
                <Link
                  to={user ? "/profile" : "/"}
                  className="flyout__clickable"
                >
                  Sua conta
                </Link>
              </div>
            </div>
            <Link
              to={!user && "/login"}
              className="header__option"
              onClick={handleSignOut}
            >
              <span className="header__optionLineOne">
                Olá, {user ? user.displayName : "Faça seu login"}
              </span>
              <span className="header__optionLineTwo">Contas e Listas</span>
            </Link>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Devoluções</span>
            <span className="header__optionLineTwo">e Pedidos</span>
          </div>
          <Link to="/checkout" className="header__option">
            <div className="header__cartBtn">
              <div className="header__option">
                <span className="header__optionLineThree">
                  {cart?.reduce(
                    (previousVal, elem) => previousVal + elem.quantity,
                    0
                  )}
                </span>
                <svg
                  className="header__cartSVG"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 22 22"
                >
                  <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z" />
                </svg>
              </div>
              <span className="header__optionLineTwo">Carrinho</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav__bar">
        <div className="nav__item">
          <span className="nav__hamburger" onClick={openSideBar}>
            Todos
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;

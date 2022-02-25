import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../Contexts/StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
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
            <SearchIcon viewBox="0 0 22 22" />
          </div>
        </div>
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Olá, Faça seu login</span>
              <span className="header__optionLineTwo">Contas e Listas</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Devoluções</span>
            <span className="header__optionLineTwo">e Pedidos</span>
          </div>
          <Link to="/checkout">
            <div className="header__option">
              <span className="header__optionLineThree">
                {cart?.reduce(
                  (previousVal, elem) => previousVal + elem.quantity,
                  0
                )}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className="header__cartSVG"
                  d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav__bar"></div>
    </>
  );
}

export default Header;

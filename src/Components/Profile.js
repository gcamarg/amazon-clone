import React, { useState } from "react";
import { useStateValue } from "../Contexts/StateProvider";
import { getAuth, updateProfile } from "firebase/auth";
import "./Profile.css";
import { Link } from "react-router-dom";
function Profile() {
  const auth = getAuth();
  const [{ user }, dispatch] = useStateValue();
  const [userInfo, setUserInfo] = useState({
    name: user?.displayName,
    photoURL: user?.photoURL,
  });
  console.log(userInfo);
  const updProfile = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: userInfo.name,
      photoURL: userInfo.photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        window.alert(error.message);
        // An error occurred
        // ...
      });
  };
  return (
    <div className="profile">
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/G/01/sell/navigation/logos/amazon-com-br-half-logo.svg"
          className="login__logo"
        />
      </Link>
      <div className="profile__container">
        <div className="profile__title">
          {userInfo.photoURL && (
            <img
              src={user?.photoURL}
              alt="profile picture"
              className="profile__picture"
            />
          )}
          <h2>Seus dados</h2>
        </div>
        <form action="" className="profile__form">
          <label htmlFor="userName">Nome</label>
          <input
            type="text"
            value={userInfo?.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <label htmlFor="userEmail">Email</label>
          <input type="text" defaultValue={user?.email} disabled />
          <label htmlFor="userPhotoURL">Foto de Perfil</label>
          <input
            type="text"
            value={userInfo?.photoURL}
            onChange={(e) =>
              setUserInfo({ ...userInfo, photoURL: e.target.value })
            }
          />
          <button
            type="Submit"
            className="profile__button"
            onClick={updProfile}
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

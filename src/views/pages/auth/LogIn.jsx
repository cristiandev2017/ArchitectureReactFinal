import React, {useEffect} from "react";
import { connect } from "react-redux";
import {loginUser} from "../../../application/actions/user"
import { signInWithGoogle } from "../../../infrastructure/services/firebase/auth";
import { bindActionCreators } from "redux";
import {getUser} from "../../../application/selectors/user.js"

const LogIn = ({loginUser,user}) => {
  const loginWithGoogleUser = (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then((r) => {
        loginUser();
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let usuario = "";
  useEffect(()=>{
      usuario = user;
      console.log("Usuario", user)
  },[user])

  return (
    <div className="container text-center mt-4">
      <h2>Autenticación con google</h2>
      <button
        className="btn btn-danger mr-2"
        type="button"
        onClick={loginWithGoogleUser}
      >
        Google <i className="bi bi-google" />
      </button>
      {<p>Hola {usuario.userName}</p>}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginUser}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

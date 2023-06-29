import React, { useContext } from 'react';
import { Context } from '../../helpers/context';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const { auth } = useContext(Context);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        user.email &&
          token &&
          dispatch(setUser({ email: user.email, accessToken: token }));
        navigate('/home');
      })
      .catch((error) => {
        //пригодится потом
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <button className="GoogleLogInButton" onClick={handleClick}>
        Войти с гугл
      </button>
    </div>
  );
};

export default GoogleLogin;

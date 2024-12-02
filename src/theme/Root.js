import React, { useState } from 'react';
import { signInWithGoogle, logout, auth } from './firebase';
import '../css/login.css';
import Loading from './Loading';

// 허용된 도메인
const ALLOWED_DOMAIN = '@parable-asia.com';

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  auth.onAuthStateChanged(async function (user) {
    if (user !== null) {
      if (user.email.endsWith(ALLOWED_DOMAIN)) {
        setUserAuth(user);
      } else {
        alert(`Access denied. Only ${ALLOWED_DOMAIN} users can log in.`);
        logout();
      }
    }
    setAuthLoading(false);
  });

  const isAllow = () => {
    return userAuth?.email?.endsWith(ALLOWED_DOMAIN);
  };

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{ display: 'none' }}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (
        <div className="login">
          <div className="login__container">
            <button
              className="login__btn login__google"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

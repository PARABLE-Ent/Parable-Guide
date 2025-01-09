import React, { useState, useEffect } from 'react';
import { signInWithGoogle, logout, auth } from './firebase';
import '../css/login.css';
import Loading from './Loading';
import LoginPage from './LoginPage';

// 허용된 도메인
const ALLOWED_DOMAIN = '@parable-asia.com';

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null); // 로그인된 사용자 정보
  const [authLoading, setAuthLoading] = useState(true); // 로딩 상태

  // Firebase 인증 상태 감지 및 Allowed Domain 체크
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async function (user) {
      if (user !== null) {
        if (user.email.endsWith(ALLOWED_DOMAIN)) {
          setUserAuth(user);
        } else {
          alert(`Access denied. Only ${ALLOWED_DOMAIN} users can log in.`);
          logout();
        }
      }
      setAuthLoading(false); // 로딩 완료
    });

    // 구독 해제 로직
    return () => {
      unsubscribe();
    };
  }, []);

  // Allow User 체크
  const isAllow = () => {
    return userAuth?.email?.endsWith(ALLOWED_DOMAIN);
  };

  // 로딩 화면
  if (authLoading) {
    return <Loading />;
  }

  // 인증 여부에 따라 렌더링
  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (
        <LoginPage />
      )}
    </React.Fragment>
  );
}

import { useState, useEffect } from 'react';

function useToken() {
  function getToken() {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
    return null;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
    }
  }

  function logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setToken(null);
    }
  }

  function isLoggedIn() {
    return !!token;
  }

  return {
    setToken: saveToken,
    token,
    logout,
    isLoggedIn,
  };
}

export default useToken;

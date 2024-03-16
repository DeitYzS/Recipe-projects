import React, { useState, useEffect } from 'react';
import { useDefaultLayout } from '@/hooks/useDefaultLayout';
import { NextPageWithLayout } from '@/utils/types';
import Login from '@/components/login/Login';
import useToken from '@/hooks/useToken';
import { log } from 'console';

const SignIn: NextPageWithLayout = () => {
  const { token, setToken, username } = useToken();  
  
  useEffect(() => {
    if (token) {
      window.location.href = "/recipe";
    }
  }, [token]);

  if(!token) {
    return (
      <>
        <Login setToken={setToken}/>
      </>
    );
  }
}

SignIn.getLayout = useDefaultLayout;
export default SignIn;

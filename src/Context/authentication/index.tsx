import React, { createContext, useEffect, useState } from 'react';
import Cookie from 'universal-cookie';
import { useHistory } from 'react-router';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { signIn } from 'Services/shortlink';

export const AuthProvider = createContext({} as any);

const Auth = (props: any) => {
  const [userName, setUserName] = useState('');

  const history = useHistory();

  const [role, setRole] = useState('');

  const cookie = new Cookie();

  const login = useMutationQuery<login, userPost>(signIn);

  const {
    location: { pathname },
    replace,
    goBack,
  } = useHistory();

  const reset = async () => {
    setUserName('');
    setRole('');
    cookie.remove('Ro', { path: '/' });
    cookie.remove('user', { path: '/' });
    cookie.remove('token', { path: '/' });
    history.replace('/user/login');
  };

  useEffect(() => {
    if (login.data) {
      setUserName(login.data.userName);
      setRole(login.data.role);
    }
  }, [login.data]);

  useEffect(() => {
    const { token, user, Ro } = cookie.getAll();
    if (token) {
      if (pathname.startsWith('/user')) {
        goBack();
      }
      setUserName(user);
      setRole(Ro);
    }
    if (
      !token &&
      (pathname.startsWith('/account/adminPanel') ||
        pathname.startsWith('/account/userPanel'))
    ) {
      replace('/user/accessDeny');
    }
  }, []);

  return (
    <AuthProvider.Provider value={{ login, userName, role, reset }}>
      {props.children}
    </AuthProvider.Provider>
  );
};

export default Auth;

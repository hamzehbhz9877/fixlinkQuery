import { AuthProvider } from 'Context/authentication/index';
import { useContext } from 'preact/compat';

const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;

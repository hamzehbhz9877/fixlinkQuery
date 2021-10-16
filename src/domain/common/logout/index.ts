import useAuth from 'Context/authentication/useAuth';

const Logout = () => {
  const { reset } = useAuth();
  reset();
  return null;
};

export default Logout;

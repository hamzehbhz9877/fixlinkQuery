import { useContext } from 'preact/compat';
import { AlertProvider } from 'Context/alert/index';

const useAlert = () => {
  return useContext(AlertProvider);
};

export default useAlert;

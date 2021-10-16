import { createContext, useState } from 'preact/compat';
import { v4 } from 'uuid';

export const AlertProvider = createContext({} as any);

export interface alert {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  id: string;
  timeout: number;
  showProgress?: boolean;
}

const AlertWrapper = (props: any) => {
  const [alert, setAlert] = useState<alert[]>([]);

  const addAlert = (newAlert: Omit<alert, 'id'>) => {
    setAlert((state) => [...state, { ...newAlert, id: v4() }]);
  };

  const removeAlert = (id: alert['id']) => {

    setAlert((state) => state.filter((el) => el.id !== id));
  };

  return (
    <AlertProvider.Provider value={{ alert, addAlert, removeAlert }}>
      {props.children}
    </AlertProvider.Provider>
  );
};

export default AlertWrapper;

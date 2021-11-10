import { FC,ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  component: Element;
  children: ReactNode;
}

const PortalWrapper: FC<Props> = ({ component, children }) => {
  return createPortal(children as any, component);
};

export default PortalWrapper;

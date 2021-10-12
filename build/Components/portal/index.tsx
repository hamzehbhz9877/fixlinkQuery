import {FC, ReactNode} from "react";
import ReactDOM from "react-dom";

interface Props{
  component:Element,
  children:ReactNode,
}

const PortalWrapper:FC<Props> = ({ component, children }) => {
  return ReactDOM.createPortal(children, component);
};

export default PortalWrapper;

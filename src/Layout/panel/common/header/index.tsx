import {FC, memo} from 'react';
import logo from 'Assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import useAuth from 'Context/authentication/useAuth';
import { FaBars } from 'react-icons/fa';

interface Props {
  open: () => void;
}

const PanelHeader: FC<Props> = ({ open }) => {
  const { userName } = useAuth();

  return (
    <div className="panel-navBar">
      <div className="mobile-menu" onClick={open}>
        <FaBars />
      </div>
      <div className="panel-logo">
        <NavLink to="/" exact>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flex-grow-1" />
      <div className="profile">
        {userName && (
          <p className="d-flex align-items-center">
            <span className="welcome">کاربر</span>
            &nbsp;<span className="user-dropdown">{userName}</span>&nbsp;
            <span className="welcome">خوش آمدید</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(PanelHeader);

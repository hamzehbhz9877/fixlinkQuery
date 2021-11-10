import { MouseEventHandler,FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'Assets/images/logo.svg';
import DropDownMenu from 'Layout/main/header/dropdown';
import useAuth from 'Context/authentication/useAuth';
import { FaBars } from 'react-icons/fa';

interface Props {
  open: MouseEventHandler<HTMLDivElement>;
}

const Header: FC<Props> = ({ open }) => {
  const { role, userName } = useAuth();

  return (
    <>
      <div className="navBar">
        <div className="mobile-menu" onClick={open}>
          <FaBars />
        </div>
        <NavLink to="/" exact>
          <img src={Logo} alt="logo" width="100" height="100" />
        </NavLink>

        <div className="flex-grow-1" />
        <ul className="navBar-item navBar-item-right">
          <li>
            <NavLink to="/" className="nav-link" exact>
              کوتاه کننده لینک
            </NavLink>
          </li>
          <li>
            <NavLink to="/link/viewerStatistics" className="nav-link">
              آمار بازدید لینک
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification/all" className="nav-link">
              اطلاعیه
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/rules" className="nav-link">
              قوانین
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/contactUs" className="nav-link">
              تماس با ما
            </NavLink>
          </li>
        </ul>
        <div className="flex-grow-1" />
        {userName ? (
          <DropDownMenu username={userName} role={role} />
        ) : (
          <NavLink to="/user/login">
            <button className="btn login-btn">ورود</button>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default memo(Header);

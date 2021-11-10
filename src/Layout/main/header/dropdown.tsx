import { FC, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import AccessControl from 'Routes/premissions/section';
import useClickOutside from 'hooks/useOutsideClick';
import { FaAngleDown, FaSignOutAlt, FaUser, FaUserTie } from 'react-icons/fa';

interface Props {
  username: string;
  role: string;
}

const DropDownMenu: FC<Props> = ({ username, role }) => {
  const clickRef = useRef<HTMLDivElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef<HTMLSpanElement>(null);

  const openMenu = () => {
    menuRef.current?.classList.toggle('active-menu');
    angleRef.current?.classList.toggle('rotate');
  };

  const closeMenu = () => {
    menuRef.current?.classList.remove('active-menu');
    angleRef.current?.classList.remove('rotate');
  };

  useClickOutside(clickRef, closeMenu);

  return (
    <div className="action" ref={clickRef}>
      <div className="profile" onClick={openMenu}>
        <p className="d-flex align-items-center">
          <span className="welcome">کاربر</span>
          &nbsp;<span className="user-dropdown">{username}</span>&nbsp;
          <span className="welcome">خوش آمدید</span>
        </p>
        <span className="angle" ref={angleRef}>
          <FaAngleDown />
        </span>
      </div>
      <div className="menu" ref={menuRef}>
        <ul>
          <AccessControl
            userPermissions={[role]}
            allowedPermissions={['Owner', 'Admin']}
          >
            <li className="dd-li">
              <FaUserTie />
              <NavLink to="/account/adminPanel" className="nav-link" exact>
                ورود به پنل مدیریت
              </NavLink>
            </li>
          </AccessControl>

          <li className="dd-li">
            <FaUser />
            <NavLink to="/account/userPanel" className="nav-link">
              ورود به حساب کاربری
            </NavLink>
          </li>
          <li className="dd-li">
            <FaSignOutAlt />
            <NavLink to="/account/logout" className="nav-link">
              خروج
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;

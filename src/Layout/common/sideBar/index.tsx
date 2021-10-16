import { FC } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes } from 'Routes/premissions/route';
import {FaSignOutAlt, FaTimes} from 'react-icons/fa';
import { IconType } from 'react-icons';
import Backdrop from "Layout/common/sideBar/backdrop";

interface Props {
  items: {
    to: string;
    fa: IconType;
    text: string;
    permission?: Array<string>;
  }[];
  open: boolean;
  close: () => void;
  name: string;
}

const PanelSidebar: FC<Props> = ({ items, open, close, name }) => {
  const { url } = useRouteMatch();

  return (
    <aside>
      <div
        className={
          !open
            ? `${name === 'panel' ? 'navigation' : 'navigation-main'}`
            : `${name === 'panel' ? 'navigation open' : 'navigation-main open'}`
        }
      >
        <div className="d-flex justify-content-end pt-3 px-2 close-menu">
          <span onClick={close} id="btn-close">
            <FaTimes />
          </span>
        </div>
        <div className="navigation-menu-body">
          <ul className="navigationApps">
            {getAllowedRoutes(items).map((item: any, index: number) => {
              return (
                <li key={index} onClick={close}>
                  <NavLink
                    to={url + item.to}
                    className="nav-link"
                    activeClassName="active-side-bar"
                    isActive={(match, { pathname }) => {
                      if (
                        (url + item.to !== url &&
                          pathname.includes(url + item.to)) ||
                        match?.isExact
                      ) {
                        return true;
                      }
                      return false;
                    }}
                    exact
                  >
                    <item.fa />
                    <span>{item.text}</span>
                  </NavLink>
                </li>
              );
            })}
            {name === 'panel' && (
              <li>
                <NavLink
                  to="/account/logout"
                  className="nav-link"
                  activeClassName="active-side-bar"
                  exact
                >
                  <FaSignOutAlt /> خروج
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Backdrop open={open} closeSidebar={close} />
    </aside>
  );
};

export default PanelSidebar;

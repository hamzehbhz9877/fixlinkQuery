import { Route, Switch } from 'react-router-dom';
import MainLayout from 'Layout/main';
import { getAllowedRoutes } from 'Routes/premissions/route';
import Auth from 'Context/authentication';
import {
  adminPath,
  mainPath,
  userPath,
} from 'Routes/premissions/route/privateRoles';
import PanelsLayout from 'Layout/panel';
import { UserItems } from 'Layout/panel/user/links';
import { AdminItems } from 'Layout/panel/admin/links';

const FixLink = () => {
  return (
    <Switch>
      <Route path={'/account/userPanel'}>
        <Auth>
          <PanelsLayout items={UserItems}>
            <Switch>
              {getAllowedRoutes(userPath).map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Switch>
          </PanelsLayout>
        </Auth>
      </Route>

      <Route path={'/account/adminPanel'}>
        <Auth>
          <PanelsLayout items={AdminItems}>
            <Switch>
              {getAllowedRoutes(adminPath).map(
                ({ route, path, component, children, ...rest }) => (
                  <Route {...rest} key={path} path={path}>
                    {children?.map(({ path, ...rest }: any) => (
                      <Route {...rest} key={path} path={path} />
                    ))}
                    <Route component={component} path={path} exact/>
                  </Route>
                )
              )}
            </Switch>
          </PanelsLayout>
        </Auth>
      </Route>

      <Route path={['/', '/account', '/about', '/link', '/access']}>
        <Auth>
          <MainLayout>
            <Switch>
              {getAllowedRoutes(mainPath).map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Switch>
          </MainLayout>
        </Auth>
      </Route>
    </Switch>
  );
};

export default FixLink;

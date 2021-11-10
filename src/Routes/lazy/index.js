import AsyncLoading from 'Routes/lazy/loading';
import Loadable from 'Routes/lazy/loadable';

export const accessDeny = Loadable(
  () => import(/* webpackChunkName:"accessDeny" */ 'domain/common/accessDeny'),
  { fallback: <AsyncLoading /> }
);

export const confirmEmail = Loadable(
  () =>
    import(
      /* webpackChunkName:"confirmEmail" */ 'domain/main/register/confirm'
    ),
  { fallback: <AsyncLoading /> }
);

export const forgetPassword = Loadable(
  () =>
    import(
      /* webpackChunkName:"forgetPassword" */ 'domain/main/forgetPassword'
    ),
  { fallback: <AsyncLoading /> }
);

export const submitPassword = Loadable(
  () =>
    import(
      /* webpackChunkName:"submitPassword" */ 'domain/main/forgetPassword/submit'
    ),
  { fallback: <AsyncLoading /> }
);
export const submitAccount = Loadable(
  () =>
    import(
      /* webpackChunkName:"submitAccount" */ 'domain/main/register/submit'
    ),
  { fallback: <AsyncLoading /> }
);

export const changePassword = Loadable(
  () =>
    import(
      /* webpackChunkName:"changePassword" */ 'domain/panel/common/changePassword'
    ),
  { fallback: <AsyncLoading /> }
);


export const register = Loadable(
  () => import(/* webpackChunkName:"register" */ 'domain/main/register'),
  { fallback: <AsyncLoading /> }
);

export const login = Loadable(
  () => import(/* webpackChunkName:"login" */ 'domain/main/login'),
  { fallback: <AsyncLoading /> }
);

export const shortLink = Loadable(
  () => import(/* webpackChunkName:"shortLink" */ 'domain/main/shortLink'),
  { fallback: <AsyncLoading /> }
);
export const contactUs = Loadable(
  () => import(/* webpackChunkName:"contactUs" */ 'domain/main/contactUs'),
  { fallback: <AsyncLoading /> }
);

export const notifications = Loadable(
  () =>
    import(/* webpackChunkName:"notifications" */ 'domain/main/notification'),
  { fallback: <AsyncLoading /> }
);

export const rules = Loadable(
  () => import(/* webpackChunkName:"rules" */ 'domain/main/rules'),
  { fallback: <AsyncLoading /> }
);
export const viewerStatistics = Loadable(
  () =>
    import(
      /* webpackChunkName:"viewerStatistics" */ 'domain/main/viewerStatistics'
    ),
  { fallback: <AsyncLoading /> }
);

// export const main = Loadable(
//   () => import(/* webpackChunkName:"home" */ 'domain/main/info'),
//   { fallback: <AsyncLoading /> }
// );

//admin

export const adminDashboard = Loadable(
  () =>
    import(
      /* webpackChunkName:"adminDashboard" */ 'domain/panel/admin/dashboard'
    ),
  { fallback: <AsyncLoading /> }
);
export const userLinks = Loadable(
  () =>
    import(
      /* webpackChunkName:"usersLinks" */ 'domain/panel/admin/users/links'
    ),
  { fallback: <AsyncLoading /> }
);
export const user = Loadable(
  () => import(/* webpackChunkName:"users" */ 'domain/panel/admin/users'),
  { fallback: <AsyncLoading /> }
);

export const adminUser = Loadable(
  () =>
    import(/* webpackChunkName:"adminUsers" */ 'domain/panel/admin/adminUsers'),
  { fallback: <AsyncLoading /> }
);

export const contactUsAdmin = Loadable(
  () =>
    import(
      /* webpackChunkName:"contactUsAdmin" */ 'domain/panel/admin/contactUs'
    ),
  { fallback: <AsyncLoading /> }
);

export const notificationsAdmin = Loadable(
  () =>
    import(
      /* webpackChunkName:"notificationsAdmin" */ 'domain/panel/admin/notification'
    ),
  { fallback: <AsyncLoading /> }
);

//user panel
export const userDashboard = Loadable(
  () =>
    import(
      /* webpackChunkName:"userDashboard" */ 'domain/panel/user/dashboard'
    ),
  { fallback: <AsyncLoading /> }
);

export const linkState = Loadable(
  () =>
    import(/* webpackChunkName:"linkState" */ 'domain/panel/user/linkState'),
  { fallback: <AsyncLoading /> }
);

export const qrCode = Loadable(
  () => import(/* webpackChunkName:"qrCode" */ 'domain/panel/user/qrCode'),
  { fallback: <AsyncLoading /> }
);

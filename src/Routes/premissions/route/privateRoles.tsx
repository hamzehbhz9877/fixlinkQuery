// Components
import * as AsyncComponent from 'Routes/lazy';
import main from "domain/main/info"
import Logout from "domain/common/logout";
import Notfound from "domain/common/notFound";

export const mainPath = [
  {
    component: AsyncComponent.submitPassword,
    path: '/user/forgetpassword/:token',
  },
  {
    component: AsyncComponent.forgetPassword,
    path: '/user/forgetPassword',
  },
  {
    component: AsyncComponent.confirmEmail,
    path: '/user/confirmemail/:token',
  },
  {
    component: AsyncComponent.submitAccount,
    path: '/user/submitAccount',
  },
  {
    component: AsyncComponent.register,
    path: '/user/register',
  },
  {
    component: AsyncComponent.login,
    path: '/user/login',
  },
  {
    component: Logout,
    path: '/account/logout',
  },
  {
    component: AsyncComponent.accessDeny,
    path: '/user/accessDeny',
  },
  {
    component: AsyncComponent.shortLink,
    path: '/link/shortLink',
  },
  {
    component: AsyncComponent.contactUs,
    path: '/about/contactUs',
  },
  {
    component: AsyncComponent.notifications,
    path: '/notification/all',
  },
  {
    component: AsyncComponent.rules,
    path: '/about/rules',
  },
  {
    component: AsyncComponent.viewerStatistics,
    path: '/link/viewerStatistics',
  },
  {
    component: main,
    path: '/',
    exact: true,
  },
  {
    component: Notfound,
    path: '*',
  },
];

export const adminPath = [
  {
    component: AsyncComponent.changePassword,
    path: '/account/adminPanel/changePassword',
  },
  {
    component: AsyncComponent.notificationsAdmin,
    path: '/account/adminPanel/notifications',
  },
  {
    component: AsyncComponent.contactUsAdmin,
    path: '/account/adminPanel/contactUs',
  },
  {
    component: AsyncComponent.adminUser,
    path: '/account/adminPanel/adminUsers',
    permission: ['Owner'],
  },
  {
    component: AsyncComponent.user,
    path: '/account/adminPanel/users',
    children: [
      {
        component: AsyncComponent.userLinks,
        path: '/account/adminPanel/users/:id',
      },
    ],
  },
  {
    component: AsyncComponent.adminDashboard,
    path: '/account/adminPanel',
    exact: true,
  },
  {
    component: Notfound,
    path: '*',
  },
];

export const userPath = [
  {
    component: AsyncComponent.qrCode,
    path: '/account/userPanel/qrCode',
  },
  {
    component: AsyncComponent.linkState,
    path: '/account/userPanel/linkState',
  },
  {
    component: AsyncComponent.changePassword,
    path: '/account/userPanel/changePassword',
  },
  {
    component: AsyncComponent.userDashboard,
    path: '/account/userPanel',
    exact: true,
  },
  {
    component: Notfound,
    path: '*',
  },
];

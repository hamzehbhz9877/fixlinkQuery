import axios from 'axios';

export const statistics = () => axios.get('Home/HomeInfo');

export const generateLink = <T>(data: T) =>
  axios.post('Link/GenerateLink', data);

export const getLinkVisit = <T>(data: T) =>
  axios.get(`LinkVisit/GetLinkVisit/${data}`);

//login
export const signIn = <T>(data: T) => axios.post('Account/Login', data);
export const register = <T>(data: T) => axios.post('Account/Register', data);
export const confirmEmail = <T>(data: T) =>
  axios.post(`Account/ConfirmEmail`, data);

//forgetPassword
export const forgetPassword = <T>(data: T) =>
  axios.post('Account/ForgotPassword', data);
export const submitForgetPassword = <T>(data: T) =>
  axios.post('Account/ForgotPasswordSubmit', data);

// ********************* admin panel *********************

//changePassword
export const changePassword = (data: changePassword) =>
  axios.post('Account/ChangePassword', data);

//notification
export const getAllNotification = ({ page, search }: pagination) =>
  axios.get(`Notification/GetAllNotification/${page}/${search}`);
export const editNotification = <T>(data: T) =>
  axios.post(`Notification/EditNotification`, data);
export const deleteNotification = (id: string) =>
  axios.get(`Notification/DeleteNotification/${id}`);
export const createNotification = (data: notificationPost) =>
  axios.post(`Notification/CreateNotification`, data);

//contactUs
export const contactUs = <T>(data: T) =>
  axios.post('ContactUs/CreateContactUs', data);

//admin dashboard
export const getInfoDashboard = () => axios.get('Admin/GetInfoDashboard');

//users list
export const getAllUser = ({ page, search }: pagination) =>
  axios.get(`User/GetAllUser/${page}/${search}`);
export const getAllLinkForUser = ({
  page,
  search,
  id,
}: pagination & { id: string }) =>
  axios.get(`User/GetAllLinkForUser/${id}/${page}/${search}`);
export const deActiveUsers = (id: string) =>
  axios.get(`User/DeActiveUser/${id}`);
export const deleteUsers = (id: string) => axios.get(`User/DeleteUser/${id}`);
export const changePasswordUsers = <T>(data: T) =>
  axios.post('User/ChangePasswordUser', data);

// admin list
export const getAllAdminUser = () => axios.get('Admin/GetAllAdminUser');
export const deleteAdminUser = (id: string) =>
  axios.get(`Admin/DeleteUser/${id}`);
export const addNewAdminUser = (data: registerPost) =>
  axios.post('Admin/CreateAdminUser', data);
export const deActiveAdminUser = (id: string) =>
  axios.get(`Admin/DeActiveUser/${id}`);

//message list
export const getAllContactUs = ({ search, page }: pagination) =>
  axios.get(`ContactUs/GetAllContactUs/${page}/${search}`);
export const deleteContactUs = (id: string) =>
  axios.get(`ContactUs/DeleteContactUs/${id}`);

// ********************* user panel *********************

//dashboard
export const getAllLink = ({ page, search }: pagination) =>
  axios.get(`Link/GetAllLink/${page}/${search}`);
export const deActiveLink = (id: string) =>
  axios.get(`Link/ChangeActivation/${id}`);
export const deleteLink = (id: string) => axios.get(`Link/DeleteLink/${id}`);

//link statistics
export const getDailyData = (id: string) =>
  axios.get(`LinkVisit/GetDailyLinkVisit/${id}`);
export const getWeeklyData = (id: string) =>
  axios.get(`LinkVisit/GetWeeklyLinkVisit/${id}`);
export const getMonthlyData = (id: string) =>
  axios.get(`LinkVisit/GetMonthlyLinkVisit/${id}`);
export const getYearlyData = (id: string) =>
  axios.get(`LinkVisit/GetYearlyLinkVisit/${id}`);

//qr code
export const getAllLinkWithQr = ({ page, search }: pagination) =>
  axios.get(`Link/GetAllLinkWithQr/${page}/${search}`);

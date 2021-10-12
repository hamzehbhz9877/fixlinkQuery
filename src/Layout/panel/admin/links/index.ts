import {
  FaBell,
  FaChalkboardTeacher,
  FaComments,
  FaKey,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';

export const AdminItems = [
  {
    to: '',
    fa: FaChalkboardTeacher,
    text: 'داشبورد',
  },
  {
    to: '/users',
    fa: FaUsers,
    text: 'لیست کاربران',
  },
  {
    to: '/adminUsers',
    fa: FaUserTie,
    text: 'لیست مدیران',
    permission: ['Owner'],
  },
  {
    to: '/contactUs',
    fa: FaComments,
    text: 'لیست پیام ها',
  },
  {
    to: '/notifications',
    fa: FaBell,
    text: 'اطلاعیه',
  },
  {
    to: '/changePassword',
    fa: FaKey,
    text: 'تغییر رمز',
  },
];

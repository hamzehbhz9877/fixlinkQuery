import { FaBell, FaEye, FaGavel, FaHome, FaPhone } from 'react-icons/fa';

export const MainItems = [
  {
    to: '',
    fa: FaHome,
    text: 'صفحه اصلی',
  },
  {
    to: 'link/viewerStatistics',
    fa: FaEye,
    text: 'آمار بازدید لینک',
  },
  {
    to: 'notification/all',
    fa: FaBell,
    text: 'اطلاعیه',
  },
  {
    to: 'about/rules',
    fa: FaGavel,
    text: 'قوانین',
  },
  {
    to: 'about/contactUs',
    fa: FaPhone,
    text: 'تماس با ما',
  },
];

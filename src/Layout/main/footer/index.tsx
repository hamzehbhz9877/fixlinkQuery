import footerImage from 'Assets/images/footerImg.svg';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="telegram-robot">
          <FaTelegram />
          <a href="https://t.me/fixlinkbot" rel="noreferrer" target="_blank">
            &nbsp;ربات تلگرام
          </a>
        </div>
        <div>
          <span className="copyright text-white">
            کلیه حقوق متعلق به &nbsp;
            <a rel="noreferrer" target="_blank" href="http://www.hashsharp.ir">
              هشتگ شارپ
            </a>
            &nbsp; می باشد
          </span>
        </div>
      </div>
      <img src={footerImage} alt="footerImage" />
    </footer>
  );
};

export default Footer;

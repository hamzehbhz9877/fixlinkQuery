import { useEffect, useState } from 'preact/compat';
import { NavLink } from 'react-router-dom';
import successLink from 'Assets/images/successLink.svg';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import Tooltip from 'Components/tooltip';
import 'Assets/css/pages/main/shortLink.css';
import Cookie from 'universal-cookie';
import {
  FaArrowCircleLeft,
  FaCopy,
  FaExclamationTriangle,
} from 'react-icons/fa';

const ShortLink = () => {
  const { copy } = useCopyToClipboard();
  const [shortLink, setShortLInk] = useState('');
  const [qr, setQr] = useState('');
  const user = new Cookie().get('token');

  useEffect(() => {
    const shortLink = localStorage.getItem('shortLink') as string;
    const qr = localStorage.getItem('qr') as string;
    setShortLInk(shortLink);
    setQr(qr);
  }, []);

  return (
    <section className="short-link center-content">
      <div className="card short-link--card custom--card">
        <div className="card__header-title">
          <img src={successLink} alt="successLink" />
          <br />
          <h4 className="text-center">لینک کوتاه ساخته شد</h4>
        </div>
        <div className="input-group short-link__input">
          <input
            value={'FixLink.ir/' + shortLink}
            readOnly
            className="form-control"
          />

          <div className="input-group-prepend">
            <Tooltip
              tooltipText="کپی شد"
              direction="left"
              clickable
              closeDelay={3000}
            >
              <button
                onClick={() => copy('https://FixLink.ir/' + shortLink)}
                className="btn short-link__copy-btn"
              >
                <FaCopy />
                &nbsp; کپی
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="short-link__qr-code text-center">
          <div className="my-4">
            <img src={'data:image/png;base64,' + qr} alt="" />
          </div>
          <button className="btn bt-outline">
            <a href={`data:image/png;base64,${qr}`} download="QrCode.jpeg">
              دانلود QR
            </a>
          </button>
        </div>
        <div className="short-link__go-back-btn">
          <Tooltip tooltipText="ساخت لینک جدید" direction="right">
            <NavLink to={'/'} exact>
              <FaArrowCircleLeft aria-hidden="true" id="backToHome" />
            </NavLink>
          </Tooltip>
        </div>
      </div>
      <div className="card short-link__alert text-center">
        <p>
          <span className="short-link__alert-warning">
            <FaExclamationTriangle />
          </span>
          &nbsp;
          <span className="short-link__alert-warning">توجه:</span>
          &nbsp;
          {!user ? (
            <>
              مدت فعال بودن لینک شما{' '}
              <span className="short-link__alert-day">10</span> روز است برای ساختن{' '}
              <span className="short-link__alert-warning">لینک نامحدود</span>
              &nbsp;
              <NavLink to={'/user/register'}>ثبت نام</NavLink>
              &nbsp; کنید.
            </>
          ) : (
            <>مدت فعال بودن لینک های شما دائمی میباشد.</>
          )}
        </p>
      </div>
    </section>
  );
};

export default ShortLink;

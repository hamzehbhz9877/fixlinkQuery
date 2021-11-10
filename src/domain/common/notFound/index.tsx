import { FC } from 'react';
import notFound from 'Assets/images/404.svg';

const Notfound: FC = () => {
  return (
    <div className="notfound text-center">
      <img src={notFound} alt="notFound" />
      <p>صفحه مورد نظر یافت نشد!</p>
    </div>
  );
};

export default Notfound;

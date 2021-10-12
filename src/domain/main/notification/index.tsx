import ReactHtmlParser from 'react-html-parser';
import { options } from './transformHtml';
import usePagination from 'hooks/usePagination';
import Paginate from 'Components/pagination';
import { MakePagination } from 'hooks/usePagination/makePagination';
import { GetNotification } from 'domain/main/notification/services';
import 'Assets/css/pages/main/notification.css';
import NoInformation from 'Components/noInfo';

const Notification = () => {
  const { ...rest } = usePagination();

  const { data, loadingMessage } = GetNotification({
    page: rest.currentPage,
    search: '',
  });
  const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo);

  return (
    <>
      <section className="notification">
        {data?.notifications.map((item: any, index: number) => {
          return (
            <div key={index} className="card notification--card custom--card">
              <div className="notification__header">
                <h5 className="notification__title">
                  <strong>{item.title}</strong>
                </h5>
                <span>{item.createAtPersian}</span>
              </div>
              <div className="notification__html-parser">
                {ReactHtmlParser(item.text, options)}
              </div>
            </div>
          );
        })}
        {loadingMessage}
        <NoInformation data={data?.notifications} />
        <Paginate {...rest} pages={pages} total={data?.pages} />
      </section>
    </>
  );
};

export default Notification;

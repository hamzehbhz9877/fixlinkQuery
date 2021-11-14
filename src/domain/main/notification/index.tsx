import usePagination from 'hooks/usePagination';
import Paginate from 'Components/pagination';
import { MakePagination } from 'hooks/usePagination/makePagination';
import { GetNotification } from 'domain/main/notification/services';
import 'Assets/css/pages/main/notification.css';
import NoInformation from 'Components/noInfo';
import NotificationHtml from "hooks/dangerousHtml";

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
            <div key={index} className="card notification--card card__custom">
              <div className="notification__header">
                <h5 className="notification__title">
                  <strong>{item.title}</strong>
                </h5>
                <span>{item.createAtPersian}</span>
              </div>
                <NotificationHtml text={item.text}/>
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

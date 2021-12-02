import { useGetQuery } from 'hooks/useGetQuery';
import { statistics } from 'Services/shortlink';
import { FaLink, FaUsers } from 'react-icons/fa';

const Statistics = () => {
  const { data, loadingMessage } = useGetQuery<statistics>({
    event: statistics,
    eventOption: {
      queryKey: 'statistics',
      loadingMessage: '...',
    }
  });

  return (
    <div className="card-container home__card">
      <div className="row g-2">
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <div className="card__body">
              <div className="card__icon">
                <FaLink />
              </div>
              <div>
                <h6 className="card-title">تعداد لینک های دائمی</h6>
                <p className="card-text">
                  {loadingMessage ?? data?.countPermanentLink}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <div className="card__body">
              <div className="card__icon">
                <FaUsers />
              </div>
              <div>
                <h6 className="card-title">تعداد کاربران</h6>
                <p className="card-text">
                  {loadingMessage ?? data?.countUsers}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card">
            <div className="card__body">
              <div className="card__icon">
                <FaLink />
              </div>
              <div>
                <h6 className="card-title">تعداد لینک های موقت</h6>
                <p className="card-text">
                  {loadingMessage ?? data?.countTemporaryLink}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

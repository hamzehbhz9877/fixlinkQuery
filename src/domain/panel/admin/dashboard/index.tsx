import { chartOption } from './chartOption';
import LineChart from 'Components/chart/line';
import { useGetQuery } from 'hooks/useGetQuery';
import { getInfoDashboard } from 'Services/shortlink';
import 'Assets/css/pages/panel/admin/dashboard.css';

const Dashboard = () => {
  const { data, loadingMessage } = useGetQuery<adminDashboard>(
    getInfoDashboard,
    {
      queryKey: 'adminDashboard',
      loadingMessage: '...',
    }
  );

  const { data: datasets, options } = chartOption(
    data?.countLinkWeeklies || [],
    data?.countBotLinkWeeklies || []
  );

  return (
    <>
      <section className="dashboard">
        <div className="card-list">
          <div className="card dashboard__card">
            <div className="card-body ">
              <h6 className="card-title">تعداد لینک های کوتاه شده موقت</h6>
              <p className="card-text">
                {loadingMessage ?? data?.countTemporaryLink}
              </p>
            </div>
          </div>
          <div className="card dashboard__card">
            <div className="card-body ">
              <h6 className="card-title">تعداد کاربران</h6>
              <p className="card-text">{loadingMessage ?? data?.countUsers}</p>
            </div>
          </div>
          <div className="card dashboard__card">
            <div className="card-body ">
              <h6 className="card-title">تعداد لینک های کوتاه شده دائمی</h6>
              <p className="card-text">
                {loadingMessage ?? data?.countPermanentLink}
              </p>
            </div>
          </div>
        </div>
        <section className="card dashboard__chart text-center">
          {data?.countLinkWeeklies.length !== 0 ||
          data?.countBotLinkWeeklies.length !== 0 ? (
            <LineChart data={datasets} chartOptions={{ options }} />
          ) : (
            <p>...</p>
          )}
        </section>
      </section>
    </>
  );
};

export default Dashboard;

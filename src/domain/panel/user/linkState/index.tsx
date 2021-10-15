import { useEffect, useMemo, useRef, useState } from 'preact/compat';
import { useGetQuery } from 'hooks/useGetQuery';
import {
  getDailyData,
  getMonthlyData,
  getWeeklyData,
  getYearlyData,
} from 'Services/shortlink';
import { Field, Form, Formik } from 'formik';
import Input from 'Components/input/input';
import { initialValues, validationSchema } from './validation';
import { chartOption } from './chartOption';
import BarChart from 'Components/chart/bar/barChart';
import 'Assets/css/pages/panel/admin/dashboard.css';

const LinkState = () => {
  const ref = useRef(false);
  const [select, setSelect] = useState('');
  const [data, setData] = useState(null);
  const [info, setInfo] = useState<any>(null);
  const [format, setFormat] = useState<Array<string> | null>(null);

  const { restQuery: dailyQ, loadingMessage: l1 } = useGetQuery<dailyData>(
    getDailyData,
    {
      queryKey: ['daily', data],
      loadingMessage: 'درحال دریافت آمار روزانه...',
    },
    data,
    {
      enabled: false,
      onSuccess: (data) => {
        setInfo(data);
        setFormat(data?.map((data) => data.hour));
      },
    }
  );

  const { restQuery: weeklyQ, loadingMessage: l2 } = useGetQuery<weeklyData>(
    getWeeklyData,
    {
      queryKey: ['weekly', data],
      loadingMessage: 'درحال دریافت آمار هفتگی...',
    },
    data,
    {
      enabled: false,
      onSuccess: (data) => {
        setInfo(data);
        setFormat(data?.map((data) => data.day + ' ' + data.date));
      },
    }
  );

  const { restQuery: monthlyQ, loadingMessage: l3 } = useGetQuery<monthlyData>(
    getMonthlyData,
    {
      queryKey: ['monthly', data],
      loadingMessage: 'درحال دریافت آمار ماهیانه...',
    },
    data,
    {
      enabled: false,
      onSuccess: (data) => {
        setInfo(data);
        setFormat(data?.map((data) => data.date));
      },
    }
  );

  const { restQuery: yearlyQ, loadingMessage: l4 } = useGetQuery<yearlyData>(
    getYearlyData,
    {
      queryKey: ['yearly', data],
      loadingMessage: 'درحال دریافت آمار سالیانه...',
    },
    data,
    {
      enabled: false,
      onSuccess: (data) => {
        setInfo(data);
        setFormat(data?.map((data) => data.month + ' ' + data.date));
      },
    }
  );

  const chart = useMemo(() => {
    if (format && info) {
      return chartOption(format, info);
    } else {
      return { data: {}, options: {} };
    }
  }, [info, format]);

  useEffect(() => {
    if (ref.current) {
      if (select === '0') {
        dailyQ.refetch();
      } else if (select === '1') {
        weeklyQ.refetch();
      } else if (select === '2') {
        monthlyQ.refetch();
      } else {
        yearlyQ.refetch();
      }
    }
  }, [data, select]);

  const handleSubmit = async (values: any) => {
    const { statistics, searchStatistics } = values;
    setSelect(statistics);
    setData(searchStatistics.split('.ir/')[1]);
    if (!ref.current) ref.current = true;
  };

  return (
    <>
      <section className="search">
        <div>
          <h5>آمار لینک های شما</h5>
          <p>
            در این قسمت شما میتوانید آمار دقیق لینک های قرار داده شده را مشاهده
            کنید
          </p>
        </div>
        <div className="card search__filter">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <Input name="searchStatistics" type="url" label="لینک کوتاه" />
                <div className="d-flex search__filter-wrapper">
                  <Field
                    as="select"
                    name="statistics"
                    className="custom-select"
                  >
                    <option value="0">آمار امروز</option>
                    <option value="1">آمار هفتگی</option>
                    <option value="2">آمار ماهیانه</option>
                    <option value="3">آمار سالیانه</option>
                  </Field>
                  <div className="search__btn">
                    <button type="submit" className="btn">
                      اعمال فیلتر
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <section className="card dashboard__chart text-center">
        {(l1 || l2 || l3 || l4) ??
          (info && info.length > 0 ? (
            <BarChart
              data={chart.data}
              chartOptions={{ options: chart.options }}
            />
          ) : (
            <p>اطلاعاتی موجود نیست</p>
          ))}
      </section>
    </>
  );
};

export default LinkState;

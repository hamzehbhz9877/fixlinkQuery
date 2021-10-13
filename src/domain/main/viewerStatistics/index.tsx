import { Form, Formik, FormikHelpers } from 'formik';
import WInout from 'Components/input/cuInput';
import { validationSchema, initialValues } from './validation';
import { getLinkVisit } from 'Services/shortlink';
import 'Assets/css/pages/main/viewerStatistics.css';
import { useEffect, useRef, useState } from 'react';
import { useGetQuery } from 'hooks/useGetQuery';
import Loading from "Components/loading";

const ViewerStatistics = () => {
  const ref = useRef<boolean>(false);

  const [value, setValue] = useState<string>('');
  const {restQuery,data,loadingMessage} = useGetQuery<getLinkVisit>(
    getLinkVisit,
    { queryKey: ['viewerStatistics', value],loadingMessage:<Loading/> },
    value,
    { enabled: false }
  );

  useEffect(() => {
    if (ref.current) restQuery.refetch();
  }, [value]);

  const handleSubmit = async (
    values: viewerLinkPost,
    actions: FormikHelpers<viewerLinkPost>
  ) => {
    actions.resetForm();
    setValue(values.viewerLink.split('.ir/')[1]);
    if (!ref.current) ref.current = true;
  };

  return (
    <section className="viewer-statistics center-content">
      <div className="viewer-statistics__short-link">
        <h4 className="text-center">آدرس کوتاه شده را وارد کنید</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <WInout loadingMessage={loadingMessage}
                name="viewerLink"
                type="url"
                label={'نمایش'}
                placeholder="https://Fixlink.ir/sample-short-url"
              />
            </Form>
          )}
        </Formik>
      </div>
      <div className="card-list">
        {[
          { key: 'تعداد بازدید', value: data?.countVisit },
          { key: 'بازدید امروز', value: data?.visitToday },
          { key: 'بازدید این هفته', value: data?.visitThisWeek },
          { key: 'بازدید این ماه', value: data?.visitThisMonth },
          { key: 'تاریخ ساخت لینک', value: data?.createAt },
          { key: 'تاریخ آخرین بازدید', value: data?.lastDateVisit },
        ].map(({ value, key }, index) => {
          return (
            <div className="card statistics" key={index}>
              <div className="card-body">
                <div>
                  <h6 className="card-title">{key}</h6>
                  <p className="card-text text-center">
                    {!data ? '...' : value !== null ? value : '...'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ViewerStatistics;

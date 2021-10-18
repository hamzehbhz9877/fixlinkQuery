import Table from 'Components/table/table';
import useSearch from 'hooks/useSearch';
import usePagination from 'hooks/usePagination';
import { MakePagination } from 'hooks/usePagination/makePagination';
import { GetAllQrCode } from 'domain/panel/user/qrCode/services';
import Paginate from 'Components/pagination';
import SearchBar from 'Components/search';
import Tooltip from 'Components/tooltip';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import NoInformation from 'Components/noInfo';
import { FaCopy } from 'react-icons/fa';

const QrCode = () => {
  const { copy } = useCopyToClipboard();
  const { searchValue, sendData } = useSearch();
  const { ...rest } = usePagination();
  const { data, loadingMessage } = GetAllQrCode({
    page: rest.currentPage,
    search: searchValue,
  });
  const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo);

  return (
    <>
      <section className="dashboard-table">
        <SearchBar
          description={
            'در این قسمت شما میتوانید جزییات دقیق Qr کد های قرار داده شده را مشاهده کنید'
          }
          label={'آدرس لینک'}
          setSearch={sendData}
          title={'جدول Qr کد ها'}
          url
        />

        <Table
          tableHeadingItem={['qr', 'لینک اصلی', 'لینک کوتاه', 'عملیات']}
          classes={'table__fixed'}
          cols={
            <colgroup>
              <col width="100px" />
              <col width="50%" />
              <col width="270px" />
              <col width="100px" />
            </colgroup>
          }
        >
          {data?.links.map(({ qr, shortLink, bigLink }, index) => (
            <tr key={index}>
              <td>
                <span>
                  <img
                    src={'data:image/png;base64,' + qr}
                    alt="qrcode"
                    style={{width:"40px"}}
                  />
                </span>
              </td>
              <td className="text-overflow big-link">
                <span>{bigLink}</span>
              </td>
              <td className="short-link">
                <Tooltip
                  direction="right"
                  tooltipText="کپی شد"
                  clickable
                  closeDelay={1000}
                >
                  <button
                    type="button"
                    onClick={() => copy('https://fixLink.ir/' + shortLink)}
                    className="btn__custom--copy"
                  >
                    {'https://FixLink.ir/' + shortLink}
                    &nbsp;
                    <FaCopy />
                  </button>
                </Tooltip>
              </td>
              <td>
                <button className="btn__custom--download">
                  <a
                    href={`data:image/png;base64,${qr}`}
                    download="QrCode.jpeg"
                  >
                    دانلود
                  </a>
                </button>
              </td>
            </tr>
          ))}
        </Table>
        {loadingMessage}
        <NoInformation data={data?.links} />
        <Paginate {...rest} pages={pages} total={data?.pages} />
      </section>
    </>
  );
};

export default QrCode;

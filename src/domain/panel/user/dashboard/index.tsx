import SearchBar from 'Components/search';
import useSearch from 'hooks/useSearch';
import usePagination from 'hooks/usePagination';
import { MakePagination } from 'hooks/usePagination/makePagination';
import useModal from 'hooks/useModal';
import Table from 'Components/table/table';
import { GetAllLink } from 'domain/panel/user/dashboard/services';
import Paginate from 'Components/pagination';
import Modal from 'Components/modal';
import { queryClient } from 'Store';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { deActiveLink } from 'Services/shortlink';
import DeleteLink from 'domain/panel/user/dashboard/delete';
import useCopyToClipboard from 'hooks/useCopyToClipboard';
import Tooltip from 'Components/tooltip';
import NoInformation from 'Components/noInfo';
import { FaCopy, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const { copy } = useCopyToClipboard();
  const { searchValue, sendData } = useSearch();
  const { ...rest } = usePagination();
  const { data, loadingMessage } = GetAllLink({
    page: rest.currentPage,
    search: searchValue,
  });
  const pages = MakePagination(rest.currentPage, data?.pages, rest.goTo);
  const { isModalOpen, handleClose, handleOpen, modalData } = useModal();
  const toggle = useMutationQuery(deActiveLink);

  const handleDeActive = (id: string) => {
    toggle.restQuery.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['links', rest.currentPage, searchValue]);
      },
    });
  };

  return (
    <>
      <section>
        <SearchBar
          description={
            'در این قسمت شما میتوانید جزییات دقیق لینک های قرار داده شده را مشاهده کنید'
          }
          label={'لینک'}
          setSearch={sendData}
          title={'جدول لینک ها'}
          url
        />

        <Table
          tableHeadingItem={[
            'لینک اصلی',
            'لینک کوتاه',
            'تعداد بازدید',
            'تاریخ ساخت',
            'وضعیت',
            'حذف',
          ]}
          classes={'table__fixed'}
          cols={
            <colgroup>
              <col width="30%" />
              <col width="270px" />
              <col width="130px" />
              <col width="200px" />
              <col width="100px" />
              <col width="70px" />
            </colgroup>
          }
        >
          {data?.links.map(
            (
              { id, isActive, bigLink, createAt, referenceCount, shortLink },
              index: number
            ) => (
              <tr key={index}>
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
                      className="btn custom-copy-btn"
                    >
                      {'https://FixLink.ir/' + shortLink}
                      &nbsp;
                      <FaCopy />
                    </button>
                  </Tooltip>
                </td>
                <td>
                  <span>{referenceCount}</span>
                </td>
                <td>
                  <span>{createAt}</span>
                </td>
                <td>
                  <label className="switch">
                    <input
                      id={id}
                      onClick={() => handleDeActive(id)}
                      type="checkbox"
                      defaultChecked={isActive}
                    />
                    <span className="switch__slider switch--round" />
                  </label>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleOpen(
                        <DeleteLink
                          close={handleClose}
                          currentPage={rest.currentPage}
                          link={shortLink}
                          searchValue={searchValue}
                        />
                      )
                    }
                  >
                    <FaTrash className="fa-trash" />
                  </button>
                </td>
              </tr>
            )
          )}
        </Table>
        {loadingMessage}
        <NoInformation data={data?.links} />
        <Paginate {...rest} pages={pages} total={data?.pages} />
        <Modal
          showModal={isModalOpen}
          close={handleClose}
          children={modalData}
        />
      </section>
    </>
  );
};

export default Dashboard;

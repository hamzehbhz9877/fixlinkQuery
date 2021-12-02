import { useGetQuery } from 'hooks/useGetQuery';
import { getAllUser } from 'Services/shortlink';

export const GetAllUser = ({ page, search }: pagination) =>
  useGetQuery<users>({
    event: getAllUser,
    eventOption: {
      loadingMessage: 'در حال دریافت کاربر ها ...',
      queryKey: ['users', page, search],
    },
    values: { page, search },
    options: { keepPreviousData: true },
  });

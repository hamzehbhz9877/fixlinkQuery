import { useGetQuery } from 'hooks/useGetQuery';
import { getAllNotification } from 'Services/shortlink';

export const GetNotification = ({ page, search }: pagination) =>
  useGetQuery<notifications>({
    event: getAllNotification,
    eventOption: {
      loadingMessage: 'در حال دریافت اطلاعیه ها ...',
      queryKey: ['notifications', page, search],
    },
    values: { page, search },
    options: { keepPreviousData: true },
  });

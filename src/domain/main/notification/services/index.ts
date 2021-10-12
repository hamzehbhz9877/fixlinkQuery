import { useGetQuery } from 'hooks/useGetQuery';
import { getAllNotification } from 'Services/shortlink';

export const GetNotification = ({ page, search }: pagination) =>
  useGetQuery<notifications>(
    getAllNotification,
    {
      loadingMessage: 'در حال دریافت اطلاعیه ها ...',
      queryKey: ['notifications', page, search],
    },
    { page, search },
    { keepPreviousData: true }
  );

import { useGetQuery } from 'hooks/useGetQuery';
import { getAllContactUs } from 'Services/shortlink';

export const GetContactUs = ({ page, search }: pagination) =>
  useGetQuery<contactUs>(
    getAllContactUs,
    {
      loadingMessage: 'در حال دریافت پیام ها ...',
      queryKey: ['contactUs', page, search],
    },
    { page, search },
    { keepPreviousData: true }
  );

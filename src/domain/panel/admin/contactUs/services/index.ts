import { useGetQuery } from 'hooks/useGetQuery';
import { getAllContactUs } from 'Services/shortlink';

export const GetContactUs = ({ page, search }: pagination) =>
  useGetQuery<contactUs>({
    event: getAllContactUs,
    eventOption: {
      loadingMessage: 'در حال دریافت پیام ها ...',
      queryKey: ['contactUs', page, search],
    },
    values: { page, search },
    options: { keepPreviousData: true },
  });

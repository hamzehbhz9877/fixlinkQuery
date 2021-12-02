import { useGetQuery } from 'hooks/useGetQuery';
import { getAllLink } from 'Services/shortlink';

export const GetAllLink = ({ page, search }: pagination) =>
  useGetQuery<links>({
    event: getAllLink,
    eventOption: {
      loadingMessage: 'در حال دریافت لینک ها ...',
      queryKey: ['links', page, search],
    },
    values: { page, search },
    options: { keepPreviousData: true },
  });

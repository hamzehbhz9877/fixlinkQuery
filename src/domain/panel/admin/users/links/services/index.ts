import { useGetQuery } from 'hooks/useGetQuery';
import { getAllLinkForUser } from 'Services/shortlink';

export const GetAllUserLinks = ({ page, search, id }: pagination & { id: string }) =>
  useGetQuery<userLinks>({
    event: getAllLinkForUser,
    eventOption: {
      loadingMessage: 'در حال دریافت لینک های کاربر ...',
      queryKey: ['userLinks', page, search, id],
    },
    values: { page, search, id },
    options: { keepPreviousData: true },
  });

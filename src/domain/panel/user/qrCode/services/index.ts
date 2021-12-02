import { useGetQuery } from 'hooks/useGetQuery';
import { getAllLinkWithQr } from 'Services/shortlink';

export const GetAllQrCode = ({ page, search }: pagination) =>
  useGetQuery<qrCode>({
    event: getAllLinkWithQr,
    eventOption: {
      loadingMessage: 'در حال دریافت qr کد ها ...',
      queryKey: ['qrCode', page, search],
    },
    values: { page, search },
    options: { keepPreviousData: true },
  });

import { useGetQuery } from 'hooks/useGetQuery';
import { getAllLinkWithQr } from 'Services/shortlink';

export const GetAllQrCode = ({ page, search }: pagination) =>
  useGetQuery<qrCode>(
    getAllLinkWithQr,
    {
      loadingMessage: 'در حال دریافت qr کد ها ...',
      queryKey: ['qrCode', page, search],
    },
    { page, search },
    { keepPreviousData: true }
  );

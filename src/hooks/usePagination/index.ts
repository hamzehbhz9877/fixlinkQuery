import { useCallback, useState } from 'preact/compat';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<any>(1);

  const goTo = useCallback((page: number | string) => {
    setCurrentPage(page);
  }, []);

  const nextPage = useCallback(
    () => setCurrentPage((currentPage: number) => currentPage + 1),
    []
  );

  const prevPage = useCallback(
    () => setCurrentPage((currentPage: number) => currentPage - 1),
    []
  );

  return {
    currentPage,
    goTo,
    nextPage,
    prevPage,
  };
};

export default usePagination;

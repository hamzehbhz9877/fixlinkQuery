import { useState } from 'preact/compat';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const sendData = (values: string) => setSearchValue(values);

  return { searchValue, sendData };
};

export default useSearch;

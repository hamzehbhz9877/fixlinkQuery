import { FC } from 'react';
import {FaTimes} from "react-icons/fa";

interface Props {
  clearSearch: (data: string) => void;
  reset: () => void;
}

const ClearSearch: FC<Props> = ({ clearSearch, reset }) => {
  const handleClear = () => {
    reset(); //clear the input
    clearSearch(''); // clear the data is going to fetch
  };

  return (
    <span className="search__close-filter-btn" onClick={handleClear}>
      <FaTimes className="fa-times"/>
    </span>
  );
};

export default ClearSearch;

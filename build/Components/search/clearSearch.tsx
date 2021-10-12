import {FC} from 'react';

interface Props{
    clearSearch:(data:string)=>void,
    reset:()=>void,
}

const ClearSearch:FC<Props> =({clearSearch,reset}) => {

    const handleClear = () => {
        reset() //clear the input
        clearSearch("") // clear the data is going to fetch
    };

    return (
        <span className="search__close-filter-btn" onClick={handleClear}><i
            className="fas fa-times"/></span>
    );
};

export default ClearSearch;
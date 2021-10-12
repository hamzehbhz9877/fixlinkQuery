import {useState} from "react";

const useSearch = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const sendData =(values:string) => setSearchValue(values);

    return {searchValue,sendData}
};

export default useSearch;

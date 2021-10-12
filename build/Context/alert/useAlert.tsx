import {useContext} from "react";
import {AlertProvider} from "Context/alert/index";

const useAlert = () => {
    return useContext(AlertProvider);
};

export default useAlert

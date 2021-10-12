import {AuthProvider} from "Context/authentication/index";
import {useContext} from "react";

const useAuth = () => {
    return useContext(AuthProvider);
};

export default useAuth

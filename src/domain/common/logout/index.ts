import useAuth from 'Context/authentication/useAuth';
import useAlert from "Context/alert/useAlert";
import {useEffect} from "preact/hooks";

const Logout = () => {
  const { reset } = useAuth();

  const alert=useAlert()
  useEffect(()=>{
    alert.addAlert({
      type:"success",
      timeout:5,
      message:"عملیات با موفقیت انجام شد",
      showProgress:true
    })
    reset();
  },[])

  return null;
};

export default Logout;

import * as Yup from "yup"

export const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    rePassword: ''
};

export const validationSchema = Yup.object({
    firstName: Yup.string().min(3, "نام کاربری باید حداقل حاوی سه کاراکتر باشد").required('لطفا نام خود را وارد کنید').trim(),
    lastName: Yup.string().min(3, "نام خانوادگی باید حداقل حاوی سه کاراکتر باشد").required('لطفا نام خانوادگی خود را وارد کنید').trim(),
    email: Yup.string().email('ایمیل وارد شده نامعتبر میباشد').required('لطفا ایمل خود را وارد کنید').trim(),
    userName: Yup.string().min(3, "نام کاربری باید حداقل حاوی سه کاراکتر باشد").required('لطفا نام کاربری خود را وارد کنید').trim(),
    password: Yup.string().min(6, "پسورد باید حداقل حاوی شش کاراکتر باشد").required('لطفا رمز عبور را وارد کنید').trim(),
    rePassword: Yup.string().oneOf([Yup.ref('password'), ''], "رمز عبور با تکرار رمز عبور برابر نیست").required('لطفا تکرار رمز عبور را وارد کنید').trim()
});
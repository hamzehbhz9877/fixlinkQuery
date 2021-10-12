import * as Yup from "yup";

export const initialValues = {
    newPassword: '',
    confirmPassword: ''
};

export const validationSchema = Yup.object({
    newPassword: Yup.string().min(6, "رمز عبور باید حداقل حاوی سه کاراکتر باشد").required('لطفا رمز عبور خود را وارد کنید').trim(),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), ''], 'رمز عبور با تکرار رمز عبور برابر نیست').required('لطفا تکرار رمز عبور خود را وارد کنید').trim()
});
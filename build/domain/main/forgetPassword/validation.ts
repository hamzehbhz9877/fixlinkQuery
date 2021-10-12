import * as Yup from "yup";

export const initialValues={
    email:''
};

export const validationSchema = Yup.object({
    email: Yup.string().email('ایمیل وارد شده نامعتبر میباشد').required('لطفا ایمل خود را وارد کنید').trim(),
});
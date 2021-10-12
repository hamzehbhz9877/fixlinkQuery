import * as Yup from "yup";

const initialValues = {
    bigLink: '',
    shortLink: ''
};

const validationSchema = Yup.object({
    bigLink: Yup.string().url("لینک وارد شده نامعتبر میباشد").required('لطفا لینک اصلی خود را وارد کنید').trim(),
});

export {initialValues,validationSchema}
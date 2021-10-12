import * as Yup from "yup"

export const initialValues = {
    title: '',
    text: ''
};

export const validationSchema = Yup.object({
    title: Yup.string().min(3, "عنوان باید حداقل حاوی سه کاراکتر باشد").required('لطفا عنوان خود را وارد کنید').trim(),
    text: Yup.string().required('لطفا متن خود را وارد کنید').trim(),
});

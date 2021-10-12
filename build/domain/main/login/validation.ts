import * as Yup from "yup";

const initialValues = {
    userName: '',
    password: ''
};

const validationSchema = Yup.object({
    userName: Yup.string().min(3, "نام کاربری باید حداقل حاوی سه کاراکتر باشد").required('لطفا نام کاربری خود را وارد کنید').trim(),
    password: Yup.string().min(6, "پسورد باید حداقل حاوی شش کاراکتر باشد").required('لطفا پسورد خود را وارد کنید').trim(),
});

export {initialValues,validationSchema}
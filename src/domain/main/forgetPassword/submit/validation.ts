import * as Yup from 'yup';

export const initialValues = {
  newPassword: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, 'پسورد باید حداقل حاوی شش کاراکتر باشد')
    .required('لطفا رمز عبور را وارد کنید')
    .trim(),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('newPassword'), ''],
      'رمز عبور با تکرار رمز عبور برابر نیست'
    )
    .required('لطفا تکرار رمز عبور را وارد کنید')
    .trim(),
});

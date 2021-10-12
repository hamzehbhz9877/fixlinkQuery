import {Link} from "react-router-dom"
import Input from "Components/input/input";
import {initialValues, validationSchema} from "./validation";
import {Form, Formik, FormikHelpers} from "formik";
import "Assets/css/pages/main/register.css"
import {useMutationQuery} from "hooks/useMutationQuery";
import {register} from "Services/shortlink";

const Register = () => {


        const registerUser = useMutationQuery<null, registerPost>(register)

        const handleSubmit = async (values: registerPost, actions: FormikHelpers<registerPost>) => {
            actions.resetForm();
            registerUser.restQuery.mutate(values)
        };

        return (
            <section className="register center-content">
                <div className="card register--card custom--card">
                    <div className="card__header-title">
                        <h4 className="text-center">ثبت نام</h4>
                    </div>
                    <Formik initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}>
                        {() => (
                            <Form>
                                <div className="form-row">
                                    <Input name="firstName" classes="col-md-6" type="text" label="نام "/>
                                    <Input name="lastName" classes="col-md-6" type="text" label="نام خانوادگی"/>
                                </div>
                                <div className="form-row">
                                    <Input name="userName" classes="col-md-6" type="text" label="نام کاربری"/>
                                    <Input name="email" classes="col-md-6" type="email" label="ایمیل"/>
                                </div>
                                <div className="form-row">
                                    <Input name="password" classes="col-md-6" type="password" label="رمز عبور"/>
                                    <Input name="rePassword" classes="col-md-6" type="password" label="تکرار رمز عبور"/>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn custom-btn">ثبت نام</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="register__have-account text-center">
                        <span>آیا قبلا ثبت نام کرده اید؟</span>
                        &nbsp;
                        <Link to={"/user/login"}>
                            وارد شوید
                        </Link>
                    </div>
                </div>
            </section>
        )

    }
;
export default Register;
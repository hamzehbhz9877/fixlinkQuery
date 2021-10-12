import {FC} from 'react';
import {ErrorMessage, Form, Formik, FormikHelpers} from "formik";
import {validationSchema} from "domain/panel/admin/notification/validation";
import Input from "Components/input/input";
import Ckeditor from "Components/ckeditor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {editorConfig} from "../ckeditor/config";
import {queryClient} from "Store";
import {editNotification} from "Services/shortlink";
import {useMutationQuery} from "hooks/useMutationQuery";

interface Props {
    data: notificationPost,
    close: () => void,
    id: string,
    currentPage: number,
    search:string
}

const EditNotificationList: FC<Props> = ({data,search, currentPage, close, id}) => {

    const edit = useMutationQuery<notifications["notifications"][0], notificationPost>(editNotification)

    const handleSubmit = async (values: notificationPost, actions: FormikHelpers<notificationPost>) => {
        edit.restQuery.mutate({...values, id}, {
            onSuccess: () => {
                queryClient.invalidateQueries(["notifications", currentPage, search])
                close()
                actions.resetForm();
            }
        })
    };

    return (
        <>
            <h5>افزودن اطلاعیه جدید</h5>
            <Formik initialValues={{...data}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                {(props) => {
                    const touched = () => {
                        props.setTouched({text: true, title: true})
                    };
                    return (
                        <Form>
                            <Input label="عنوان" name="title" type="text" onBlur={touched}/>
                            <Ckeditor options={{
                                onChange:(event: any, editor: any) => props.setFieldValue("text", editor.getData()),
                                data:props.values.text,
                                onBlur:()=>touched()
                            }}
                                      type={ClassicEditor} config={editorConfig}/>
                            <ErrorMessage
                                name="text"
                                className="form--ckeditor-error"
                                component="div"
                            />
                                      <br/>
                            <button className="btn custom-mutate-button" type="submit">تایید</button>
                        </Form>
                    )
                }
                }
            </Formik>
        </>
    );
};

export default EditNotificationList;
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {FC} from "react";

interface Props{
    config:any,
    type:any,
    options?:any
}

const Ckeditor:FC<Props> = ({config,type,options}) => {
    return (
            <CKEditor
                {...options}
                editor={type}
                config={config}
            />
    );
};

export default Ckeditor;
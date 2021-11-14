import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import {useIsMutating} from "react-query";
import Loading from "Components/loading";

type buttonType= DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface Props extends buttonType{
    text:string
}

const MutationsButton:FC<Props> = ({text,...rest}) => {
    const isMutating=useIsMutating()

    return (
        <button {...rest} disabled={isMutating>0}>
            {isMutating>0?<Loading/>: text}
        </button>
    );
};

export default MutationsButton;
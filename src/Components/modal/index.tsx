import ReactModal from "react-modal";
import {FC, ReactNode} from "react";
ReactModal.setAppElement("#modal-wrapper");

export  type modal = Omit<ReactModal.Props, "isOpen" | "onRequestClose">

interface Props {
    showModal: boolean,
    close: () => void,
    children: ReactNode,
    options?: modal|null
}

const Modal: FC<Props> = ({options, showModal, close, children}) => {

    if (!showModal) {
        return null
    }

    return (
        <ReactModal
            isOpen={showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={close}
            className="Modal"
            style={{content: {width: "430px"}}}
            overlayClassName="Overlay"
            {...options}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;

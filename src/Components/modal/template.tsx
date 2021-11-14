
const ModalHeader = (props:any) => {
    return (
        <div className="Modal__header">
            {props.children}
        </div>
    );
};
const ModalBody = (props:any) => {
    return (
        <div className="Modal__body">
            {props.children}
        </div>
    );
};
const ModalFooter = (props:any) => {
    return (
        <div className="Modal__footer">
            {props.children}
        </div>
    );
};

export {ModalHeader,ModalBody,ModalFooter};
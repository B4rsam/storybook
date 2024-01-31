import { FC, HTMLAttributes, ReactNode } from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import Form from "../form/Form";
import Icon from "../icon/Icon";
import '../shadow/shadow.sass'
import s from './modal.module.sass';

interface IModal extends HTMLAttributes<HTMLDivElement> {
    titleText: string;
    cancelBtn?: string;
    submitBtn?: string;
    placeholder: string;
    children?: ReactNode;
    handleSubmit?: () => {} | undefined;
    handleCancel?: () => {} | undefined;
    handleClose?: () => {} | undefined;
}

const Modal : FC<IModal> = ({titleText, cancelBtn, submitBtn, placeholder, children, handleSubmit, handleCancel, handleClose}) => {
    return (
        <div className={`lightShadow ${s.modal}`}>
            <Button onClick={handleClose} btntype="circle" size="small" classname={s.closebtn} children={<Icon className={s.icon} size="m" icon="close"/>}/>
            <Typography textType="subtitle2" fontStyle="normal" fontWeight={700} children={titleText}/>
            {children}
            <Form className={s.field} shape="pill" icon={"none"} placeHolder={placeholder}/>
            <div className={s.modalBtns}>
                <Button btntype="tertiary" size="medium" classname={s.auxbtn} onClick={handleCancel} children={cancelBtn}/>
                <Button btntype="primary" size="medium" classname={s.mainbtn} onClick={handleSubmit} children={submitBtn}/>
            </div>
        </div>
    )
}

export default Modal;
import { FC, HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import Form from "../form/Form";
import Icon from "../icon/Icon";
import '../shadow/shadow.sass'
import './modal.sass';

interface IModal extends HTMLAttributes<HTMLDivElement> {
    titleText: string;
    cancelBtn: string;
    submitBtn: string;
    placeholder: string;
}

const Modal : FC<IModal> = ({titleText, cancelBtn, submitBtn, placeholder}) => {
    return (
        <div className="modal lightShadow">
            <Button btntype="circle" size="small" classname="closebtn" children={<Icon size="m" icon="close"/>}/>
            <Typography textType="subtitle2" fontStyle="normal" fontWeight={700} children={titleText}/>
            <Form inputType="input" shape="pill" icon={"none"} placeHolder={placeholder}/>
            <div className="modalBtns">
                <Button btntype="tertiary" size="medium" classname="auxbtn" children={cancelBtn}/>
                <Button btntype="primary" size="medium" classname="mainbtn" children={submitBtn}/>
            </div>
        </div>
    )
}

export default Modal;
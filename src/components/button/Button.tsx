import './button.scss'

const Button = (props : any) => {
    const buttonType = () => {
        switch(props.type) {
            case "rounded":
                return "button-rounded";
            case "long":
                return "button-long";
            case "cancel":
                return "button-cancel";
        }
    }
    return (
        <button className={`button ${buttonType()}`} {...props}>{props.children}</button>
    )
}

export default Button
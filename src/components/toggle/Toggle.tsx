import {FC, HTMLAttributes, ReactNode} from "react";
import './toggle.sass';

const Toggle = () => {

    const handleClick = () => {
        console.log("test");
    }

    return (
        <div className="pill" onClick={handleClick}>
            <div className="circle"/>
        </div>
    )
}

export default Toggle;
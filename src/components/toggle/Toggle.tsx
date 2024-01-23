import {FC, HTMLAttributes, ReactNode} from "react";
import './toggle.sass';

const Toggle = () => {

    return (
        <label className="pill">
            <input type="checkbox"/>
            <span className="circle" />
        </label>
    )
}

export default Toggle;
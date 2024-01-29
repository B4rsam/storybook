import {FC, HTMLAttributes, ReactNode} from "react";
import './toggle.sass';

const Toggle = () => {

    return (
        <label className="toggleBox">
            <input type="checkbox"/>
            <span className="toggleControl" />
        </label>
    )
}

export default Toggle;

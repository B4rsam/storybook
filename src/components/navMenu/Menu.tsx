import {FC, HTMLAttributes, ReactNode} from "react";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import s from './menu.module.sass';

type validLogos = "dark" | "light";
type btnTypes = "primary" | "secondary" | "tertiary";
type btnSizes = "small" | "medium" | "large";
interface IMenu extends HTMLAttributes<HTMLDivElement> {
    logoType: validLogos;
    logoText: ReactNode;
    btntext1: ReactNode;
    btntext2: ReactNode;
    btntext3: ReactNode;
    btntext4: ReactNode;
    btntext5: ReactNode;
    btntype1: btnTypes;
    btntype2: btnTypes;
    btntype3: btnTypes;
    btntype4: btnTypes;
    btntype5: btnTypes;
    btnSizes: btnSizes;
}

const MenuBar : FC<IMenu> = ({logoType, logoText, btntype1, btntype2, btntype3, btntype4, btntype5, btnSizes, btntext1, btntext2, btntext3, btntext4, btntext5}) => {
    return (
        <div className={s.menuBar}>
            <Logo logoType={logoType} children={logoText}/>
            <div className={s.buttonHolder}>
                <Button btntype={btntype1} children={btntext1} size={btnSizes}/>
                <Button btntype={btntype2} children={btntext2} size={btnSizes}/>
                <Button btntype={btntype3} children={btntext3} size={btnSizes}/>
                <Button btntype={btntype4} children={btntext4} size={btnSizes}/>
                <Button btntype={btntype5} children={btntext5} size={btnSizes}/>
            </div>
        </div>
    )
}

export default MenuBar;
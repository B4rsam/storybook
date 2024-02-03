import {FC, HTMLAttributes, ReactNode} from "react";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import s from './menu.module.sass';

type validLogos = "dark" | "light";
type btnTypes = "primary" | "secondary" | "tertiary";
type btnSizes = "small" | "medium" | "large";
type validBtn = {children: string, type: btnTypes};
interface IMenu extends HTMLAttributes<HTMLDivElement> {
    logoType: validLogos;
    logoText: ReactNode;
    btnList: Array<validBtn>;
    btnSizes: btnSizes;
}

const MenuBar : FC<IMenu> = ({logoType, logoText, btnList, btnSizes}) => {
    return (
        <div className={s.menuBar}>
            <Logo logoType={logoType} children={logoText}/>
            <div className={s.buttonHolder}>
                {btnList.map((item) => <Button children={item.children} btntype={item.type} size={btnSizes} />)}
            </div>
        </div>
    )
}

export default MenuBar;
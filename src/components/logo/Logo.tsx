import {FC, HTMLAttributes, ReactNode} from "react";
import Avatar from "../avatar/Avatar";
import Typography from "../typography/Typography";
import './logo.sass';

type logoTypes = "light" | "dark";
interface ILogo extends HTMLAttributes<HTMLDivElement> {
    logoType: logoTypes;
    children: ReactNode;
}

const Logo : FC<ILogo> = ({logoType, children, ...other}) => {
    return (
        <div className={`logo ${logoType}`}>
            <Typography textType="header3" fontWeight={700} fontStyle="normal" >{children}</Typography>
            <Avatar size={"l"}/>
        </div>
    )
}

export default Logo;
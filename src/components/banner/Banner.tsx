import { FC, HTMLAttributes, ReactNode } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import './banner.sass';

type bannerTypes = "info" | "success" | "alert";
interface IBanner extends HTMLAttributes<HTMLDivElement> {
    bannerType: bannerTypes;
    bannerMessage: string;
}

const Banner : FC<IBanner> = ({bannerType, bannerMessage}) => {
    const handleType = () => {
        switch(bannerType) {
            case "info":
                return( 
                    <div className="banner infoBanner">
                        <Icon size="m" icon="info" />
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname="closebtn" children={<Icon size="m" icon="close"/>}/>
                    </div> )
            case "alert":
                return( 
                    <div className="banner alertBanner">
                        <Icon size="m" icon="warning"/>
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname="closebtn" children={<Icon size="m" icon="close"/>}/>
                    </div> )
            case "success":
                return( 
                    <div className="banner successBanner">
                        <Icon size="m" icon="check"/>
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname="closebtn" children={<Icon size="m" icon="close"/>}/>
                    </div> )
        }
    }
    return (handleType())
}

export default Banner;
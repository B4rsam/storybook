import { FC, HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import s from './banner.module.sass';

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
                    <div className={`${s.banner} ${s.infoBanner}`}>
                        <Icon className={s.icon} size="m" icon="info" />
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname={s.button} children={<Icon className={s.icon} size="m" icon="close"/>}/>
                    </div> )
            case "alert":
                return( 
                    <div className={`${s.banner} ${s.alertBanner}`}>
                        <Icon className={s.icon} size="m" icon="warning"/>
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname={s.button} children={<Icon className={s.icon} size="m" icon="close"/>}/>
                    </div> )
            case "success":
                return( 
                    <div className={`${s.banner} ${s.successBanner}`}>
                        <Icon className={s.icon} size="m" icon="check"/>
                        <Typography textType="body1" fontStyle="normal" fontWeight={400} children={bannerMessage}/>
                        <Button btntype="circle" size="medium" classname={s.button} children={<Icon className={s.icon} size="m" icon="close"/>}/>
                    </div> )
        }
    }
    return (handleType())
}

export default Banner;
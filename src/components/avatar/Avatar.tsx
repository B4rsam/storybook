import { FC, HTMLAttributes} from "react";
import s from'./avatar.module.sass'
import defaultAvatar from '../../assets/avatars/Avatar.svg'

type avatarSize = "l" | "xl";

interface IAvatar extends HTMLAttributes<HTMLDivElement> {
    size: avatarSize;
}

const Avatar : FC<IAvatar> = ({size, ...other}) => {
    return (
        <img {...other} className={`${s.avatar} ${s[size]}`} src={defaultAvatar} alt="User Avatar"/>
    )
}

export default Avatar
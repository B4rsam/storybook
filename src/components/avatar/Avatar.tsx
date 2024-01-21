import { FC } from 'react';
import './avatar.sass'
import defaultAvatar from '../../assets/avatars/Avatar.svg'

type avatarSize = "l" | "xl";

interface IAvatar extends HTMLDivElement {
    size: avatarSize;
}

const Avatar : FC<IAvatar> = ({size, children, ...other}) => {
    return (
        <img {...other} className={`avatar ${size}`} src={defaultAvatar} alt="User Avatar"/>
    )
}

export default Avatar
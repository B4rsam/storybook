import {FC, HTMLAttributes} from 'react';
import './icon.sass';
import Warning from '../../assets/icons/Warning.svg';
import Video from '../../assets/icons/Video.svg';
import Unlock from '../../assets/icons/Unlock.svg';
import Trash from '../../assets/icons/Trash.svg';
import Trash4 from '../../assets/icons/Trash 4.svg';
import Stats from '../../assets/icons/Stats.svg';
import Star from '../../assets/icons/Star.svg';
import Share from '../../assets/icons/Share.svg';
import Settings from '../../assets/icons/Settings.svg';
import Search from '../../assets/icons/Search.svg';
import Rotate from '../../assets/icons/Rotate.svg';
import Rotate2 from '../../assets/icons/Rotate copy.svg';
import Puzzle from '../../assets/icons/Puzzle.svg';
import Plus from '../../assets/icons/Plus.svg';
import Pin from '../../assets/icons/Pin.svg';
import Notes from '../../assets/icons/Notes.svg';
import More from '../../assets/icons/More.svg';
import Minus from '../../assets/icons/Minus.svg';
import Menu from '../../assets/icons/Menu.svg';
import Map from '../../assets/icons/Map.svg';
import Lock from '../../assets/icons/Lock.svg';
import Loading from '../../assets/icons/Loading.svg';
import List from '../../assets/icons/List.svg';
import Info from '../../assets/icons/info.svg';
import Inbox from '../../assets/icons/Inbox.svg';
import Inboxarrow from '../../assets/icons/Inbox Arrow.svg';
import Home from '../../assets/icons/Home.svg';
import Help from '../../assets/icons/Help.svg';
import Finder from '../../assets/icons/Finder.svg';
import Filter from '../../assets/icons/Filter.svg';
import Eye from '../../assets/icons/Eye.svg';
import Export from '../../assets/icons/Export.svg';
import Drag from '../../assets/icons/Drag.svg';
import Download from '../../assets/icons/Download.svg';
import Download2 from '../../assets/icons/Download 2.svg';
import Dashboard from '../../assets/icons/Dashboard.svg';
import Close from '../../assets/icons/Close.svg';
import Clock from '../../assets/icons/Clock.svg';
import Circleplus from '../../assets/icons/Circle Plus.svg';
import Circleminus from '../../assets/icons/Circle Minus.svg';
import Circlecheck from '../../assets/icons/Circle Check.svg';
import Circlearrowright from '../../assets/icons/Circle Arrow Right.svg';
import Chevron2 from '../../assets/icons/Chevron 2.svg';
import Check from '../../assets/icons/Check.svg';
import Camera from '../../assets/icons/Camera.svg';
import Calender from '../../assets/icons/Calendar.svg';
import Briefcase from '../../assets/icons/Briefcase.svg';
import Box from '../../assets/icons/Box.svg';
import Bin from '../../assets/icons/Bin.svg';
import Bell from '../../assets/icons/Bell.svg';
import Arrowright from '../../assets/icons/Arrow Right.svg';

type iconSize = "xs" | "s" | "m" | "l" | "xl";
type iconPack = "warning" | "video" | "unlock" | "trash" | "trash4" | "stats" | "star" | "share" | "settings" | "search" | "rotate" | "rotate2" | "puzzle" | "plus" | "pin" | "notes" | "more" | "minus" | "menu" | "map" | "lock" | "loading" | "list" | "info" | "inbox" | "inboxarrow" | "home" | "help" | "finder" | "filter" | "eye" | "export" | "drag" | "download" | "download2" | "dashboard" | "close" | "clock" | "circleplus" | "circleminus" | "circlecheck" | "circlearrowright" | "chevron2" | "check" | "camera" | "calender" | "briefcase" | "box" | "bin" | "bell" | "arrowright";
interface IIcon extends HTMLAttributes<HTMLDivElement> {
    size: iconSize;
    icon: iconPack;
}

const Icon: FC<IIcon> = ({size, icon, className, ...other}) => {

    const getIcon = () => {
        switch(icon) {
            case 'warning':
                return <img src={Warning} alt="Warning icon" />;
            case 'video':
                return <img src={Video} alt="Video icon" />;
            case 'unlock':
                return <img src={Unlock} alt="Unlock icon" />;
            case 'trash':
                return <img src={Trash} alt="Trash icon" />;
            case 'trash4':
                return <img src={Trash4} alt="Trash4 icon" />;
            case 'stats':
                return <img src={Stats} alt="Stats icon" />;
            case 'star':
                return <img src={Star} alt="Star icon" />;
            case 'share':
                return <img src={Share} alt="Share icon" />;
            case 'settings':
                return <img src={Settings} alt="Settings icon" />;
            case 'search':
                return <img src={Search} alt="Search icon" />;
            case 'rotate':
                return <img src={Rotate} alt="Rotate icon" />;
            case 'rotate2':
                return <img src={Rotate2} alt="Rotate2 icon" />;
            case 'puzzle':
                return <img src={Puzzle} alt="Puzzle icon" />;
            case 'plus':
                return <img src={Plus} alt="Plus icon" />;
            case 'pin':
                return <img src={Pin} alt="Pin icon" />;
            case 'notes':
                return <img src={Notes} alt="Notes icon" />;
            case 'more':
                return <img src={More} alt="More icon" />;
            case 'minus':
                return <img src={Minus} alt="Minus icon" />;
            case 'menu':
                return <img src={Menu} alt="Menu icon" />;
            case 'map':
                return <img src={Map} alt="Map icon" />;
            case 'lock':
                return <img src={Lock} alt="Lock icon" />;
            case 'loading':
                return <img src={Loading} alt="Loading icon" />;
            case 'list':
                return <img src={List} alt="List icon" />;
            case 'info':
                return <img src={Info} alt="Info icon" />;
            case 'inbox':
                return <img src={Inbox} alt="Inbox icon" />;
            case 'inboxarrow':
                return <img src={Inboxarrow} alt="Inboxarrow icon" />;
            case 'home':
                return <img src={Home} alt="Home icon" />;
            case 'help':
                return <img src={Help} alt="Help icon" />;
            case 'finder':
                return <img src={Finder} alt="Finder icon" />;
            case 'filter':
                return <img src={Filter} alt="Filter icon" />;
            case 'eye':
                return <img src={Eye} alt="Eye icon" />;
            case 'export':
                return <img src={Export} alt="Export icon" />;
            case 'drag':
                return <img src={Drag} alt="Drag icon" />;
            case 'download':
                return <img src={Download} alt="Download icon" />;
            case 'download2':
                return <img src={Download2} alt="Download2 icon" />;
            case 'dashboard':
                return <img src={Dashboard} alt="Dashboard icon" />;
            case 'close':
                return <img src={Close} alt="Close icon" />;
            case 'clock':
                return <img src={Clock} alt="Clock icon" />;
            case 'circleplus':
                return <img src={Circleplus} alt="Circleplus icon" />;
            case 'circleminus':
                return <img src={Circleminus} alt="Circleminus icon" />;
            case 'circlecheck':
                return <img src={Circlecheck} alt="Circlecheck icon" />;
            case 'circlearrowright':
                return <img src={Circlearrowright} alt="Circlearrowright icon" />;
            case 'chevron2':
                return <img src={Chevron2} alt="Chevron2 icon" />;
            case 'check':
                return <img src={Check} alt="Check icon" />;
            case 'camera':
                return <img src={Camera} alt="Camera icon" />;
            case 'calender':
                return <img src={Calender} alt="Calender icon" />;
            case 'briefcase':
                return <img src={Briefcase} alt="Briefcase icon" />;
            case 'box':
                return <img src={Box} alt="Box icon" />;
            case 'bin':
                return <img src={Bin} alt="Bin icon" />;
            case 'bell':
                return <img src={Bell} alt="Bell icon" />;
            case 'arrowright':
                return <img src={Arrowright} alt="Arrowright icon" />;
            default:
                return "No img";
        }
    }

    return (
        <div {...other} className={`icon ${icon} ${size} ${className}`}>{getIcon()}</div>
    )
}

export default Icon

import {FC, useState} from 'react';
import SideBarChats from "./components/SideBarChats/SideBarChats";
import SectionChats from "./components/SectionChats/SectionChats";

const Chats: FC = () => {
    const [chatType, setChatType] = useState<string>('Все')
    return (
        <>
            <SideBarChats setType={setChatType} type={chatType}/>
            <SectionChats type={chatType}/>
        </>
    );
}

export default Chats;
import {FC} from 'react';
import {IDialog} from "@features/chats/store/dialog/types";
import DropDownMessagesItem from './DropDownMessagesItem/DropDownMessagesItem'
import {useAuth} from "@providers/AuthProvider";
interface IDropDownMessagesBlock{
    item:IDialog,
    isShow:boolean,
    typeItem:boolean
}
const DropDownMessagesBlock: FC<IDropDownMessagesBlock> = ({item,isShow,typeItem}) => {
    const {user} = useAuth()
    //console.log('wd',item.messages[item.messages.length]?.userId !== String(user?.id))
    const handle = (typeItem:boolean) => {
        if (typeItem === false){
            return item.isRead === typeItem && item.messages[item.messages.length]?.userId !== String(user?.id)
        } else {
            //return item.isRead === typeItem
        }

    }
   // const showConsist = item.isRead == typeItem && ( typeItem === false ? item.messages[item.messages.length]?.userId !== String(user?.id) : true )
    const showConsist = item.isRead === typeItem//handle(typeItem)
    return (
        <>
            {showConsist &&
                <DropDownMessagesItem isShow={isShow} item={item}/>}
        </>
    );
}

export default DropDownMessagesBlock;
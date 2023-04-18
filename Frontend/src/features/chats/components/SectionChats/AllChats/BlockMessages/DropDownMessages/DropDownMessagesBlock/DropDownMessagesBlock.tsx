import {FC} from 'react';
import {IDialog} from "@features/chats/store/dialog/types";
import DropDownMessagesItem from './DropDownMessagesItem/DropDownMessagesItem'
interface IDropDownMessagesBlock{
    item:IDialog,
    isShow:boolean,
    typeItem:boolean
}
const DropDownMessagesBlock: FC<IDropDownMessagesBlock> = ({item,isShow,typeItem}) => {

    const showConsist = item.isRead === typeItem

    return (
        <>
            {showConsist && <DropDownMessagesItem isShow={isShow} item={item}/>}
        </>
    );
}

export default DropDownMessagesBlock;
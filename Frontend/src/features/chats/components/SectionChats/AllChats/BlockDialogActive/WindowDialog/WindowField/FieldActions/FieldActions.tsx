import {FC} from 'react';
import Action from "./Action/Action";
import {FaTelegramPlane} from 'react-icons/fa'

interface IFieldActions{
    sendMessage:() => void
}
const FieldActions: FC<IFieldActions> = ({sendMessage}) => {
    return (
        <div>
            <Action icon={<FaTelegramPlane color={'gray'} onClick={sendMessage}  size={20}/>}/>
        </div>
    );
}

export default FieldActions;
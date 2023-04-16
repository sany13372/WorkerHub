import {FC} from 'react';
import WindowDialog from './WindowDialog/WindowDialog'
import RightSideBar from './RightSideBar/RightSideBar'

const BlockDialogActive: FC = () => {
    return (
        <>
            <WindowDialog/>
            <RightSideBar/>
        </>
    );
}

export default BlockDialogActive;
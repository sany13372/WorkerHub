import {FC} from 'react';
import Header from "./Header/Header";
import styles from './WindowDialog.module.scss'
import MessageWindow from "./Window/MessageWindow";
import WindowField from "./WindowField/WindowField";
import {useTypedSelector} from "@hooks/useTypedSelector";

const WindowDialog: FC = () => {
    const {dialogActive} = useTypedSelector((store) => store.dialog)

    return (
        <div className={styles.window}>
                <div>
                    <Header dialog={dialogActive}/>
                    <MessageWindow messages={dialogActive?.messages || []}/>
                    <WindowField/>
                </div>
        </div>
    );
}

export default WindowDialog;
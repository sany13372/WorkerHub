import {FC, useEffect} from 'react';
import Header from "./Header/Header";
import styles from './WindowDialog.module.scss'
import MessageWindow from "./Window/MessageWindow";
import WindowField from "./WindowField/WindowField";
import {useTypedSelector} from "@hooks/useTypedSelector";

const WindowDialog: FC = () => {

    const arre = [2,3,5,6]
    const arrs = [8,2,1,0,6]

    const {dialogActive} = useTypedSelector((store) => store.dialog)
    const multiArr = [[[2,4],[3,6]],[2,8]]

    for (let i = 0; i < arre.length; i++) {
        for (let j = 0; j < arrs.length; j++) {
            if (arre[i] === arrs[j]) {
                console.log('arr',arre[i])
            }
        }
    }
    const notMultiArray = (arr:any) => {
        for (let i = 0; i < arr.length; i++) {

        }
    }

    useEffect(()=>{
        console.log()
    },[])
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
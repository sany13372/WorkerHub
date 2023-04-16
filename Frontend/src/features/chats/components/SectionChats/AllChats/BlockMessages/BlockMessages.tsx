import {FC, useEffect, useState} from 'react';
import styles from './BlockMessages.module.scss'
import SearchLine from "./SearchLine/SearchLine";
import DropDownMessages from "./DropDownMessages/DropDownMessages";
import LoadingOrItems from "@components/UI/LoadingOrItems/LoadingOrItems";
import {useDebounce} from "@hooks/useDebounce";
import {IDialog} from "@features/chats/store/dialog/types";
import {useActions} from "@hooks/useActions";

interface IBlockMessages {
    isLoading: boolean
    dialogs: IDialog[]
    data:IDialog[]
}

const BlockMessages: FC<IBlockMessages> = ({isLoading, dialogs,data}) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounceSearch = useDebounce(searchTerm, 1000)
    const {setDialogs} = useActions()

    useEffect(() => {
        const queryDialogs = [...dialogs]?.filter((dialog: IDialog) => dialog.user?.firstname?.toLowerCase().includes(debounceSearch.toLowerCase()))
        if (debounceSearch == '') {
            setDialogs(data)
        } else {
            setDialogs(queryDialogs)
        }
    }, [debounceSearch])

    return (
        <div className={styles.block}>
            <SearchLine searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <LoadingOrItems title={'Диалогов нет'} length={dialogs?.length || 0} loading={isLoading}>
                <DropDownMessages typeItem={false} title={'Непрочитанные'} dialogs={dialogs || []}/>
                <DropDownMessages typeItem={true} title={'Прочитанные'} dialogs={dialogs || []}/>
            </LoadingOrItems>
        </div>
    );
}

export default BlockMessages;
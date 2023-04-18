import {FC, useEffect, useState} from 'react';
import styles from './BlockMessages.module.scss'
import SearchLine from "./SearchLine/SearchLine";
import DropDownMessages from "./DropDownMessages/DropDownMessages";
import LoadingOrItems from "@components/UI/LoadingOrItems/LoadingOrItems";
import {useDebounce} from "@hooks/useDebounce";
import {IDialog} from "@features/chats/store/dialog/types";
import {useActions} from "@hooks/useActions";
import {useTranslation} from "react-i18next";

interface IBlockMessages {
    isLoading: boolean
    dialogs: IDialog[]
    data:IDialog[]
}

const BlockMessages: FC<IBlockMessages> = ({isLoading, dialogs,data}) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounceSearch = useDebounce(searchTerm, 1000)
    const {setDialogs} = useActions()
    const {t} = useTranslation()

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
            <LoadingOrItems title={t('chats.nodialogs')} length={dialogs?.length || 0} loading={isLoading}>
                <DropDownMessages typeItem={false} title={t('chats.unread')} dialogs={dialogs || []}/>
                <DropDownMessages typeItem={true} title={t('chats.read')} dialogs={dialogs || []}/>
            </LoadingOrItems>
        </div>
    );
}

export default BlockMessages;
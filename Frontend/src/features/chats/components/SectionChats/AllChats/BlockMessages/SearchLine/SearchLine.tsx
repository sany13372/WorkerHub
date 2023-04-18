import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchLine.module.scss'
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";
import {useTranslation} from "react-i18next";

interface ISearchLine {
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchLine: FC<ISearchLine> = ({setSearchTerm, searchTerm}) => {
    const {t} = useTranslation()
    const {dark} = useThemContext()
    return (
        <input className={cn(styles.search, {
            [styles.dark]: dark
        })} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder={t('chats.search') || ''}/>
    );
}

export default SearchLine;
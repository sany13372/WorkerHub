import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchLine.module.scss'
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";

interface ISearchLine{
    searchTerm:string
    setSearchTerm:Dispatch<SetStateAction<string>>
}
const SearchLine: FC<ISearchLine> = ({setSearchTerm,searchTerm}) => {
    const {dark} = useThemContext()
    return (
        <input className={cn(styles.search,{
            [styles.dark]:dark
        })} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder={'Поиск'}/>
    );
}

export default SearchLine;
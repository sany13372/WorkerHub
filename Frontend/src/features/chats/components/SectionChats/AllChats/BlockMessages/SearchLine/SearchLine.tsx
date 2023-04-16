import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchLine.module.scss'

interface ISearchLine{
    searchTerm:string
    setSearchTerm:Dispatch<SetStateAction<string>>
}
const SearchLine: FC<ISearchLine> = ({setSearchTerm,searchTerm}) => {
    return (
        <input className={styles.search} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder={'Поиск'}/>
    );
}

export default SearchLine;
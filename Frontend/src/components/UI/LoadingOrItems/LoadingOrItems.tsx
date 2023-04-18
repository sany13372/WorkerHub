import {FC, PropsWithChildren} from 'react';

interface ILoadingOrItems extends PropsWithChildren {
    title: string
    length: number
    loading: boolean
    top?:string
}

const LoadingOrItems: FC<ILoadingOrItems> = ({loading, title, length, children,top}) => {
    if (loading) {
        return <h4 >Загрузка</h4>
    } else if (length === 0) {
        return <h4 style={{textAlign:'center',marginTop:top || '1rem'}}>{title}</h4>
    }
    return <>{children}</>
}

export default LoadingOrItems;
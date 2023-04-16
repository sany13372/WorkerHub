import {FC, PropsWithChildren} from 'react';

interface IItemLength extends PropsWithChildren {
    title: string
    length: number
}

const ItemLength: FC<IItemLength> = ({length, title, children}) => {
    if (length === 0) {
        return <h4>{title}</h4>
    }
    return <>{children}</>
}

export default ItemLength;
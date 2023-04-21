import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";

type TypeOut = {
    ref: any
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialValue: boolean): TypeOut => {
    const [isShow, setIsShow] = useState<boolean>(initialValue)
    const ref = useRef<HTMLElement | null>(null)
    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current?.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return {isShow,ref,setIsShow}
}
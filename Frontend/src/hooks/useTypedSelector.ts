import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeRootState } from '@context/store'
//Хук что бы доставать со store данные
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
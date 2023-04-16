import {FC, useState} from 'react';
import styles from './Auth.module.scss'
import AuthFields from "@features/auth/components/AuthFields/AuthFields";
import {SubmitHandler, useForm} from "react-hook-form";
import {useLoginMutation, useRegisterMutation} from "@context/user/user.actions";
import {removeTokensStorage, saveToStorage} from "@utils/authHelper";
import {IUser} from "@context/user/user.types";
import {useNavigate} from "react-router-dom";

interface IAuthInput {
    email: string
    password: string
}

const Auth: FC = () => {

    //const {isLoading} = useAuth()
    const nav = useNavigate()

    const [type, setType] = useState<'login' | 'register'>('login')
    const logout = () => {
        removeTokensStorage()
        localStorage.removeItem('user')
    }

    const {
        register: registerInput,
        handleSubmit,
        formState,
        reset,
    } = useForm<IAuthInput>({
        mode: 'onChange',
    })

    const [login] = useLoginMutation()
    const [register] = useRegisterMutation()

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        if (type === 'login') {
            login(data)
                .then((data: any) => {
                    if (data.data.accessToken) {
                        saveToStorage(data.data)
                        nav('/chats')
                    }
                })
        } else if (type === 'register') {
            register(data)
                .then((data: any) => {
                    if (data.data.accessToken) {
                        saveToStorage(data.data)
                        nav('/chats')
                    }
                })
        }
        reset()
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h4 className={styles.title}>Авторазация</h4>
                <AuthFields isPasswordRequired={true} register={registerInput} formState={formState}/>
                <div className={styles.buttons}>
                    <button
                        type="submit"
                        onClick={() => setType('login')}
                        // disabled={isLoading}
                    >
                        Войти
                    </button>
                    <button
                        type="submit"
                        onClick={() => setType('register')}
                        //disabled={isLoading}
                    >
                        Зарегистрироваться
                    </button>
                    {/*<div onClick={() => logout()}>*/}
                    {/*    */}
                    {/*</div>*/}
                </div>
            </form>
        </section>
    );
}

export default Auth;
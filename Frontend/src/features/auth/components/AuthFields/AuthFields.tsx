import {FC} from 'react';
import Field from "@components/UI/Field/Field";
import {FormState, UseFormRegister} from "react-hook-form";
import {validEmail} from "@utils/validEmail";
import styles from './AuthFields.module.scss'

interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
                                         register,
                                         formState: {errors},
                                         isPasswordRequired = false,
                                     }) => {
    return (
        <div className={styles.field}>
            <Field
                {...register('email', {
                    required: 'Почта обязательна!',
                    pattern: {
                        value: validEmail,
                        message: 'Пожалуйста введите валидную почту',
                    },
                })}
                placeholder="Почта"
                error={errors.email}
            />
            <Field
                {...register(
                    'password',
                    isPasswordRequired
                        ? {
                            required: 'Пароль обязателен!',
                            minLength: {
                                value: 6,
                                message: 'Минимальная длинна пароля 6 симолов!',
                            },
                        }
                        : {}
                )}
                placeholder="Пароль"
                type="password"
                error={errors.password}
            />
        </div>
    );
}

export default AuthFields;
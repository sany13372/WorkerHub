import {FC} from 'react';
import styles from './notFoundPage.module.scss'
import {useTranslation} from "react-i18next";

const notFoundPage: FC = () => {
    const {t} = useTranslation()
    return (
        <main className={styles.page}>
            <h3>404</h3>
            <h3>{t('errore')}</h3>
        </main>
    );
}

export default notFoundPage;
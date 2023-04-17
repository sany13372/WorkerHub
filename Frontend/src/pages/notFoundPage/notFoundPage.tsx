import {FC} from 'react';
import styles from './notFoundPage.module.scss'

const notFoundPage: FC = () => {
    return (
        <main className={styles.page}>
            <h3>404</h3>
            <h3>Упс! Что-то пошло не так, этой страницы не существует</h3>
        </main>
    );
}

export default notFoundPage;
import Head from 'next/head';
import styles from '@/styles/home.module.css';

export default function AllEventsPage() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='All events page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>All events page</h1>
            </main>
        </>
    );
}

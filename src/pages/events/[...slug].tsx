import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function FilteredEventsPage() {
    return (
        <>
            <Head>
                <title>Filtered Events App</title>
                <meta name='description' content='Filtered events page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Filtered events page</h1>
            </main>
        </>
    );
}

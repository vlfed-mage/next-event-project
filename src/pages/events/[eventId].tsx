import Head from 'next/head';
import styles from '@/styles/home.module.css';

export default function EventDetailsPage() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Event details page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Event details page</h1>
            </main>
        </>
    );
}

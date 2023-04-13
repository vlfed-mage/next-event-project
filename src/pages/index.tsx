import Head from 'next/head';
import styles from '@/styles/home.module.css';

import { getAllEvents } from '@/data/mock-data';
import EventsList from '@/components/events/events-list';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name='description' content='Home page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Home page</h1>
                <EventsList events={getAllEvents()} />
            </main>
        </>
    );
}

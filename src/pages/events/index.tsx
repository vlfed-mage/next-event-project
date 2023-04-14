import Head from 'next/head';

import { getAllEvents } from '@/data/mock-data';
import EventsList from '@/components/events/events-list';
import EventsSearch from '@/components/events/events-search';

export default function AllEventsPage() {
    return (
        <>
            <Head>
                <title>All events page</title>
                <meta name='description' content='All events page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <EventsSearch />
            <EventsList events={getAllEvents()} />
        </>
    );
}

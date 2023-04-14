import Head from 'next/head';
import { useRouter } from 'next/router';

import { DateFilter } from '@/global/types';

import { getFilteredEvents } from '@/data/mock-data';
import EventsList from '@/components/events/events-list';

export default function FilteredEventsPage() {
    const router = useRouter();
    let dateFilter: DateFilter | null = null;

    if (Array.isArray(router.query.slug) && router.query.slug.length === 2) {
        const [year, month] = router.query.slug;
        dateFilter = {
            year: +year,
            month: +month,
        };
    }
    if (dateFilter) {
        const { year, month } = dateFilter;
        if (year > 2030 || year < 2021 || month < 1 || month > 12) {
            return <p>Invalid filter. Please adjust your values!</p>;
        }
    }

    const filteredEvents = dateFilter ? getFilteredEvents(dateFilter) : [];

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for chosen filter!</p>;
    }

    return (
        <>
            <Head>
                <title>Filtered Events App</title>
                <meta name='description' content='Filtered events page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <EventsList events={filteredEvents} />
        </>
    );
}

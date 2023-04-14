import Head from 'next/head';
import { useRouter } from 'next/router';

import { DateFilter } from '@/global/types';

import { getFilteredEvents } from '@/data/mock-data';
import EventsList from '@/components/events/events-list';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/error-alert/error-alert';

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

    const filteredEvents = dateFilter ? getFilteredEvents(dateFilter) : [];

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for chosen filter!</p>
                </ErrorAlert>
                <Button href='/events'>Show all events</Button>
            </>
        );
    }

    if (dateFilter) {
        const { year, month } = dateFilter;
        if (year > 2030 || year < 2021 || month < 1 || month > 12) {
            return (
                <>
                    <ErrorAlert>
                        <p>Invalid filter. Please adjust your values!</p>
                    </ErrorAlert>
                    <Button href='/events'>Show all events</Button>
                </>
            );
        }
        return (
            <>
                <Head>
                    <title>Filtered Events App</title>
                    <meta name='description' content='Filtered events page' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <ResultsTitle date={new Date(year, month - 1)} />
                <EventsList events={filteredEvents} />
            </>
        );
    }
}

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Event } from '@/global/types';
import { getEventById } from '@/data/mock-data';

import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';

export default function EventDetailsPage() {
    const router = useRouter();
    const event: Event | undefined = getEventById(router.query.eventId);

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Event details page' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <EventSummary title={event.title} />
            <EventLogistics date={event.date} location={event.location} image={event.image} title={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}

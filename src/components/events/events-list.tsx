import { Event } from '@/data/mock-data';
import EventItem from '@/components/events/event-item';

import classes from '../../styles/event-list.module.css';

interface EventsListProps {
    events: Event[];
}

const EventsList = ({ events }: EventsListProps) => {
    return (
        <ul className={classes.list}>
            {events.map(event => (
                <EventItem key={event.id} {...event} />
            ))}
        </ul>
    );
};

export default EventsList;

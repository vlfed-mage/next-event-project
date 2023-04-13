import classes from '@/styles/event-summary.module.css';
import { Event } from '@/global/types';

function EventSummary({ title }: Pick<Event, 'title'>) {
    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;

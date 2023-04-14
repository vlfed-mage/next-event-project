import { Event } from '@/global/types';
import classes from '../../styles/results-title.module.css';
import { formDate } from '@/helpers';

import Button from '@/components/ui/button';

function ResultsTitle({ date }: Pick<Event, 'date'>) {
    return (
        <section className={classes.title}>
            <h1>Events in {formDate(date, false)}</h1>
            <Button href='/events'>Show all events</Button>
        </section>
    );
}

export default ResultsTitle;

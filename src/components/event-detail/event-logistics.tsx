import classes from '@/styles/event-logistics.module.css';
import Image from 'next/image';

import { Event } from '@/global/types';
import { formAddressText, formDate } from '@/helpers';

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';

type EventLogisticsProps = Pick<Event, 'title' | 'date' | 'image' | 'location'>;

function EventLogistics({ date, location, image, title }: EventLogisticsProps) {
    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <Image src={`/${image}`} alt={title} width={500} height={500} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{formDate(date)}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{formAddressText(location)}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;

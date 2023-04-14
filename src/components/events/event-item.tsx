import Image from 'next/image';

import { Event } from '@/global/types';
import itemClasses from '@/styles/event-item.module.css';
import { formAddressText, formDate } from '@/helpers';

import DateIcon from '@/components/icons/date-icon';
import AddressIcon from '@/components/icons/address-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import Button from '@/components/ui/button';

const EventItem = ({ id, title, location, date, image }: Event) => {
    return (
        <li className={itemClasses.item}>
            <Image src={`/${image}`} alt={title} width={500} height={500} />
            <div className={itemClasses.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={itemClasses.date}>
                        <DateIcon />
                        <time>{formDate(date)}</time>
                    </div>
                    <div className={itemClasses.address}>
                        <AddressIcon />
                        <address>{formAddressText(location)}</address>
                    </div>
                </div>
                <div className={itemClasses.actions}>
                    <Button
                        href={{
                            pathname: '/events/[eventId]',
                            query: { eventId: id },
                        }}>
                        <span>Explore Event</span>
                        <span className={itemClasses.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;

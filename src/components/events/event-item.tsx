import Link from 'next/link';
import Image from 'next/image';

import { Event } from '@/global/types';

import itemClasses from '../../styles/event-item.module.css';
import btnClasses from '../../styles/btn.module.css';

import DateIcon from '@/components/icons/date-icon';
import AddressIcon from '@/components/icons/address-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';

const EventItem = ({ id, title, location, date, image }: Event) => {
    const formedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <li className={itemClasses.item}>
            <Image src={`/${image}`} alt={title} width={500} height={500} />
            <div className={itemClasses.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={itemClasses.date}>
                        <DateIcon />
                        <time>{formedDate}</time>
                    </div>
                    <div className={itemClasses.address}>
                        <AddressIcon />
                        <address>{location.replace(', ', '\n')}</address>
                    </div>
                </div>
                <div className={itemClasses.actions}>
                    <Link
                        className={btnClasses.btn}
                        href={{
                            pathname: '/events/[eventId]',
                            query: { eventId: id },
                        }}>
                        <span>Explore Event</span>
                        <span className={itemClasses.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;

import Link from 'next/link';
import Image from 'next/image';

import itemClasses from '../../styles/event-item.module.css';
import btnClasses from '../../styles/btn.module.css';
import { Event } from '@/data/mock-data';

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
                        <time>{formedDate}</time>
                    </div>
                    <div className={itemClasses.address}>
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
                        Explore Event
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;

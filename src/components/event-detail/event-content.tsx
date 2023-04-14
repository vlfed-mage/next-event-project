import classes from '@/styles/event-content.module.css';

import { ChildrenProps } from '@/global/types';

const EventContent = ({ children }: ChildrenProps) => {
    return <section className={classes.content}>{children}</section>;
};

export default EventContent;

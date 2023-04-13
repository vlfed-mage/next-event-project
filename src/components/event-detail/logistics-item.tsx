import { ElementType } from 'react';

import classes from '@/styles/logistics-item.module.css';
import { ChildrenProps } from '@/global/types';

interface LogisticsItemProps extends ChildrenProps {
    icon: ElementType;
}

function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {
    return (
        <li className={classes.item}>
            <span className={classes.icon}>
                <Icon />
            </span>
            <span className={classes.content}>{children}</span>
        </li>
    );
}

export default LogisticsItem;

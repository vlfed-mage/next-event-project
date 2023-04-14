import classes from '@/styles/error-alert.module.css';

import { ChildrenProps } from '@/global/types';

function ErrorAlert({ children }: ChildrenProps) {
    return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;

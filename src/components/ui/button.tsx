import { MouseEventHandler, MouseEvent } from 'react';
import { ChildrenProps } from '@/global/types';
import classes from '@/styles/btn.module.css';
import Link from 'next/link';
import { UrlObject } from 'url';

interface ButtonProps extends ChildrenProps {
    onClickHandler?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
    href?: string | UrlObject;
}

const Button = ({ href, children, onClickHandler }: ButtonProps) => {
    if (href) {
        return (
            <Link className={classes.btn} href={href} onClick={onClickHandler}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes.btn} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default Button;

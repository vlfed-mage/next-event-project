import { MouseEvent } from 'react';
import { ChildrenProps } from '@/global/types';
import classes from '@/styles/btn.module.css';

interface ButtonProps extends ChildrenProps {
    onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClickHandler }: ButtonProps) => {
    return (
        <button className={classes.btn} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default Button;

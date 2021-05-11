import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children, add, circle }) => {
    return (
        <button
            onClick={onClick}
            className={
                classNames('button', className, {
                    'button--outline': outline,
                    'button--add': add,
                    'button--circle': circle,
                })}>
            {children}
        </button>
    )
}

export default Button

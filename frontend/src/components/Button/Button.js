import React from 'react';
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-secondary'
]

const SIZES = [
    'btn-small',
    'btn-large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const styleClass = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const sizeClass = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
            className={`btn ${styleClass} ${sizeClass}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
        
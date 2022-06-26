import React from 'react';
import styles from './Button.module.css'

type ButtonPropsType = {
    className?: string
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

function Button(props: ButtonPropsType) {

    let finalClassName = `${styles.default} ${props.className}`

    return (
        <button className={finalClassName} disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
    )
}


export default Button
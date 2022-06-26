import React from 'react';
import styles from './Display.module.css'

type DisplayProps = {
    error?: string
    value: number
    max: number
}

function Display(props: DisplayProps) {

const maxClass = `${styles.display} ${(props.value === props.max && !props.error) ? styles.maxnumber : ''} ${props.error ? styles.message : ''}`

    return (
        <div className={maxClass}>
            {props.error ? props.error : props.value}
        </div>
    )
}

export default Display;



import styles from './ButtonBlock.module.css';
import React from 'react';
import Button from '../Button/Button';
import {buttonPropsType} from '../../App';

type ButtonBockProps = {
    buttonArray: Array<buttonPropsType>
}

function ButtonBlock(props: ButtonBockProps) {

    return (
        <div className={styles.buttonBlock}>

            {props.buttonArray.map(b=>{
               return <Button key={b.title} disabled={b.disabled} title={b.title} onClick={b.onClick}/>
            })}
        </div>
    )
}

export default ButtonBlock;
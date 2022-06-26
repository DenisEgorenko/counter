import React, {ChangeEvent} from 'react';
import styles from './InputDisplay.module.css'
import Button from '../Button/Button';

type InputDisplayProps = {
    changeNewStartValue: (value: number) => void,
    changeNewMaxValue: (value: number) => void,
    start: number,
    max: number,
    error: string
}


function InputDisplay(props: InputDisplayProps) {

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewStartValue(JSON.parse(e.currentTarget.value))
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewMaxValue(JSON.parse(e.currentTarget.value))
    }

    const increaseStartValueHandler = () => {
        props.changeNewStartValue(props.start + 1)
    }

    const decreaseStartValueHandler = () => {
        props.changeNewStartValue(props.start - 1)
    }

    const increaseMaxValueHandler = () => {
        props.changeNewMaxValue(props.max + 1)
    }

    const decreaseMaxValueHandler = () => {
        props.changeNewMaxValue(props.max - 1)
    }

    const finalInputClassName = `${styles.input} ${props.error === 'Неправильное значения ввода' ? styles.error: ''}`

    return (
        <div className={styles.display}>

            <div className={styles.inputWrapper}>
                Start Value:
                <div className={styles.inputBlock}>
                    <Button className={styles.button} title={'<'} onClick={decreaseStartValueHandler}/>
                    <input value={props.start} onChange={changeStartValueHandler} className={finalInputClassName}/>
                    <Button className={styles.button} title={'>'} onClick={increaseStartValueHandler}/>
                </div>
            </div>

            <div className={styles.inputWrapper}>
                Max Value:
                <div className={styles.inputBlock}>
                    <Button className={styles.button} title={'<'} onClick={decreaseMaxValueHandler}/>
                    <input value={props.max} onChange={changeMaxValueHandler} className={finalInputClassName}/>
                    <Button className={styles.button} title={'>'} onClick={increaseMaxValueHandler}/>
                </div>
            </div>

        </div>
    )
}

export default InputDisplay;
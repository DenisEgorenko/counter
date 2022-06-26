import styles from './DiaplayVariants.module.css';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import React from 'react';
import {buttonPropsType, CounterPropsType} from '../../App';
import Display from '../DisplayBlock/Display';
import InputDisplay from '../DisplayBlock/InputDisplay';



function TwoDisplayMode(props: CounterPropsType) {


    const buttonArray: Array<buttonPropsType> = [
        {title: 'Inc', onClick: props.increaseHandler, disabled: (props.error === 'Неправильное значения ввода' || props.error === 'Введите значение и нажмите "Set"' || props.value === props.max)},
        {title: 'Reset', onClick: props.resetHandler, disabled: props.value === props.start},
    ]

    const buttonSetArray: Array<buttonPropsType> = [
        {title: 'Set', onClick: props.setStartMaxValue, disabled: (props.error === 'Неправильное значения ввода' || props.error === '')}
    ]


    return (
        <div className={styles.twoDisplayWrapper}>
            <div className={styles.wrapper}>
                <InputDisplay
                    changeNewStartValue={props.setNewStartValue}
                    changeNewMaxValue={props.setNewMaxValue}
                    start={props.newStartValue}
                    max={props.newMaxValue}
                    error={props.error}
                />

                <ButtonBlock
                    buttonArray={buttonSetArray}
                />
            </div>

            <div className={styles.wrapper}>
                <Display
                    error={props.error}
                    max={props.max}
                    value={props.value}/>

                <ButtonBlock
                    buttonArray={buttonArray}
                    />
            </div>
        </div>
    )
}

export default TwoDisplayMode;
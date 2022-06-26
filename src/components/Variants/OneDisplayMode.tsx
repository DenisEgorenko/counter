import styles from './DiaplayVariants.module.css';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import React from 'react';
import {buttonPropsType, CounterPropsType} from '../../App';
import Display from '../DisplayBlock/Display';
import InputDisplay from '../DisplayBlock/InputDisplay';



export function OneDisplayMode(props: CounterPropsType) {

    const buttonArray: Array<buttonPropsType> = [
        {title: "Inc", onClick: props.increaseHandler, disabled: props.value === props.max},
        {title: "Reset", onClick: props.resetHandler, disabled: props.value === props.start},
        {title: "Set", onClick: ()=>(props.setSetMode ? props.setSetMode(!props.setMode): '')}
    ]

    const buttonSetArray: Array<buttonPropsType> = [
        {title: 'Set', onClick: (props.setStartMaxValue), disabled: (props.error === 'Неправильное значения ввода')}
    ]

    return (
        <div className={styles.wrapper}>

            {props.setMode
                ? <InputDisplay
                    changeNewStartValue={props.setNewStartValue}
                    changeNewMaxValue={props.setNewMaxValue}
                    start={props.newStartValue}
                    max={props.newMaxValue}
                    error={props.error}
                />
                :<Display
                    max={props.max}
                    value={props.value}
                />
            }

            {props.setMode
                ? <ButtonBlock
                    buttonArray={buttonSetArray}
                    />
                : <ButtonBlock
                    buttonArray={buttonArray}
                    />
            }
        </div>
    )
}




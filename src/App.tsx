import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {OneDisplayMode} from './components/Variants/OneDisplayMode';
import Button from './components/Button/Button';
import TwoDisplayMode from './components/Variants/TwoDisplayMode';


export type CounterPropsType = {
    setStartMaxValue: () => void,
    start: number,
    max: number,
    newStartValue: number,
    newMaxValue: number,
    setNewStartValue: (value: number) => void,
    setNewMaxValue: (value: number) => void,
    value: number,
    increaseHandler: () => void,
    resetHandler: () => void,
    error: string,
    setMode?: boolean,
    setSetMode?: (value:boolean)=>void

}

export type buttonPropsType = {
    title: string, onClick: () => void, disabled?: boolean
}


function App() {

    const [start, setStart] = useState(Number(localStorage.getItem('start value')))
    const [max, setMax] = useState(Number(localStorage.getItem('max value')))

    const [newStartValue, setNewStartValue] = useState(start)
    const [newMaxValue, setNewMaxValue] = useState(max)

    const [value, setValue] = useState<number>(start)
    const [error, setError] = useState('')

    const [twoDisplayMode, setTwoDisplayMode] = useState(false)
    const[setMode, setSetMode] = useState<boolean>(false)

    useEffect(() => {
        if (newStartValue >= newMaxValue) {
            setError('Неправильное значения ввода')
        } else if (newStartValue !== start || newMaxValue !== max) {
            setError('Введите значение и нажмите "Set"')
        } else {
            setError('')
        }
    }, [newStartValue, newMaxValue])

    const increaseHandler = () => {
        if (value < max) {
            setValue(value + 1)
        }
    }

    const resetHandler = () => {
        setValue(start)
    }

    const setStartMaxValue = () => {
        setStart(newStartValue)
        setMax(newMaxValue)
        setError('')
        setValue(newStartValue)
        setSetMode(false)
        localStorage.setItem("start value", JSON.stringify(newStartValue))
        localStorage.setItem("max value", JSON.stringify(newMaxValue))
    }


    return (
        <div className={styles.App}>

            <div className={styles.toggleButton}><Button title={'Toggle'} onClick={() => setTwoDisplayMode(!twoDisplayMode)}/>
            </div>

            {twoDisplayMode ?
                <TwoDisplayMode start={start}
                                max={max}
                                newStartValue={newStartValue}
                                newMaxValue={newMaxValue}
                                setNewStartValue={setNewStartValue}
                                setNewMaxValue={setNewMaxValue}
                                value={value}
                                increaseHandler={increaseHandler}
                                resetHandler={resetHandler}
                                setStartMaxValue={setStartMaxValue}
                                error={error}
                />
                : <OneDisplayMode start={start}
                                  max={max}
                                  newStartValue={newStartValue}
                                  newMaxValue={newMaxValue}
                                  setNewStartValue={setNewStartValue}
                                  setNewMaxValue={setNewMaxValue}
                                  value={value}
                                  increaseHandler={increaseHandler}
                                  resetHandler={resetHandler}
                                  setStartMaxValue={setStartMaxValue}
                                  error={error}
                                  setMode={setMode}
                                  setSetMode={setSetMode}

                />
            }
        </div>
    );
}


export default App;

import React, {useEffect} from 'react';
import styles from './App.module.css';
import {OneDisplayMode} from './components/Variants/OneDisplayMode';
import Button from './components/Button/Button';
import TwoDisplayMode from './components/Variants/TwoDisplayMode';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './state/state';
import {
    CounterState,
    setError,
    setMax,
    setNewMaxValue,
    setNewStartValue,
    setStart,
    setValue,
    toggleCounterMode,
    toggleOneDisplayCounterSetMode
} from './state/counterReducer';


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
    setSetMode?: () => void
}

export type buttonPropsType = {
    title: string, onClick: () => void, disabled?: boolean
}


function App() {


    const state = useSelector<RootState, CounterState>(state => state.counter)
    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        if (state.newStartValue >= state.newMaxValue) {
            dispatch(setError('Неправильное значения ввода'))
        } else if (state.newStartValue !== state.start || state.newMaxValue !== state.max) {
            dispatch(setError('Введите значение и нажмите "Set"'))
        } else {
            dispatch(setError(''))
        }
    }, [state.newStartValue, state.newMaxValue])


    const increaseHandler = () => {
        if (state.value < state.max) {
            dispatch(setValue(state.value + 1))
        }
    }

    const resetHandler = () => {
        dispatch(setValue(state.start))
    }

    const setStartMaxValue = () => {
        dispatch(setStart(state.newStartValue))
        dispatch(setMax(state.newMaxValue))
        dispatch(setValue(state.newStartValue))
        dispatch(setError(''))
    }

    const setStartMaxValueHandleForOneDisplayMode = () => {
        setStartMaxValue()
        dispatch(toggleOneDisplayCounterSetMode())
    }

    const setNewStartValueHandler = (value: number) => {
        dispatch(setNewStartValue(value))
    }

    const setNewMaxValueHandler = (value: number) => {
        dispatch(setNewMaxValue(value))
    }


    return (
        <div className={styles.App}>

            <div className={styles.toggleButton}><Button title={'Toggle'}
                                                         onClick={() => dispatch(toggleCounterMode())}/>
            </div>

            {state.counterMode ?
                <TwoDisplayMode start={state.start}
                                max={state.max}
                                newStartValue={state.newStartValue}
                                newMaxValue={state.newMaxValue}
                                setNewStartValue={setNewStartValueHandler}
                                setNewMaxValue={setNewMaxValueHandler}
                                value={state.value}
                                increaseHandler={increaseHandler}
                                resetHandler={resetHandler}
                                setStartMaxValue={setStartMaxValue}
                                error={state.error}
                />
                : <OneDisplayMode start={state.start}
                                  max={state.max}
                                  newStartValue={state.newStartValue}
                                  newMaxValue={state.newMaxValue}
                                  setNewStartValue={setNewStartValueHandler}
                                  setNewMaxValue={setNewMaxValueHandler}
                                  value={state.value}
                                  increaseHandler={increaseHandler}
                                  resetHandler={resetHandler}
                                  setStartMaxValue={setStartMaxValueHandleForOneDisplayMode}
                                  error={state.error}
                                  setMode={state.twoDisplayCounterSetMode}
                                  setSetMode={() => dispatch(toggleOneDisplayCounterSetMode())}

                />
            }
        </div>
    );
}

export default App;

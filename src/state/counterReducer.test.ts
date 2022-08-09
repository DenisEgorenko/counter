import {
    counterReducer,
    setError,
    setMax, setNewMaxValue, setNewStartValue,
    setStart, setValue,
    toggleCounterMode,
    toggleOneDisplayCounterSetMode
} from './counterReducer';

test('Counter Mode Should Be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }

    const newState = counterReducer(initialState, toggleCounterMode)
    expect(newState.counterMode).toBe(false)
})

test('Two Display Counter Mode Should Be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, toggleOneDisplayCounterSetMode)
    expect(newState.counterMode).toBe(true)
})

test('Error should be set', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setError('err1'))
    expect(newState.error).toBe('err1')
})

test('Start should be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setStart(5))
    expect(newState.start).toBe(5)
})

test('Max should be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setMax(10))
    expect(newState.max).toBe(10)
})


test('Value should be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setValue(10))
    expect(newState.value).toBe(10)
})


test('newStartValue should be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setNewStartValue(10))
    expect(newState.newStartValue).toBe(10)
})

test('newMaxValue should be changed', () => {

    const initialState = {
        counterMode: true,
        twoDisplayCounterSetMode: false,
        error: '',
        start: 0,
        max: 5,
        value: 0,
        newStartValue: 0,
        newMaxValue: 0
    }
    const newState = counterReducer(initialState, setNewMaxValue(10))
    expect(newState.newMaxValue).toBe(10)
})




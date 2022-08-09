import { createAction, createReducer } from '@reduxjs/toolkit'

export type CounterState = {
    counterMode: boolean
    twoDisplayCounterSetMode: boolean
    error: string
    start: number
    max: number
    value: number
    newStartValue: number
    newMaxValue: number
}

export const toggleCounterMode = createAction('counter/TOGGLE-TWO-DISPLAY-MODE')
export const toggleOneDisplayCounterSetMode = createAction('counter/TOGGLE-TWO-DISPLAY-COUNTER-SET-MODE')
export const setError = createAction<string>('counter/SET-ERROR')
export const setStart = createAction<number>('counter/SET-START')
export const setMax = createAction<number>('counter/SET-MAX')
export const setValue = createAction<number>('counter/SET-VALUE')
export const setNewStartValue = createAction<number>('counter/SET-NEW-START-VALUE')
export const setNewMaxValue = createAction<number>('counter/SET-NEW-MAX-VALUE')


const initialState = {
    counterMode: false,
    twoDisplayCounterSetMode: false,
    error: '',
    start: 1,
    max: 5,
    value: 1,
    newStartValue: 1,
    newMaxValue: 5
} as CounterState

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleCounterMode, (state, action)=>{
            state.counterMode = !state.counterMode
        })

        .addCase(toggleOneDisplayCounterSetMode, (state, action)=>{
            state.twoDisplayCounterSetMode = !state.twoDisplayCounterSetMode
        })

        .addCase(setError, (state, action)=>{
            state.error = action.payload
        })

        .addCase(setStart, (state, action)=>{
            state.start = action.payload
        })

        .addCase(setMax, (state, action)=>{
            state.max = action.payload
        })

        .addCase(setValue, (state, action)=>{
            state.value = action.payload
        })

        .addCase(setNewStartValue, (state, action)=>{
            state.newStartValue = action.payload
        })

        .addCase(setNewMaxValue, (state, action)=>{
            state.newMaxValue = action.payload
        })
})
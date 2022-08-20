import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from './counterReducer';

let preloadedStart = localStorage.getItem('start value') ? Number(localStorage.getItem('start value')) : 1
let preloadedMax = localStorage.getItem('max value') ? Number(localStorage.getItem('max value')) : 5

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    preloadedState: {
        counter: {
            counterMode: false,
            twoDisplayCounterSetMode: false,
            error: '',
            start: preloadedStart,
            max: preloadedMax,
            value: preloadedStart,
            newStartValue: preloadedStart,
            newMaxValue: preloadedMax
        }
    }
})

store.subscribe(()=>{
    localStorage.setItem('start value', JSON.stringify(store.getState().counter.newStartValue))
    localStorage.setItem('max value', JSON.stringify(store.getState().counter.newMaxValue))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
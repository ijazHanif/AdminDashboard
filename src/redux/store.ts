import {configureStore} from '@reduxjs/toolkit'
import bankReducer from '@/redux/Slices/bankSlices'
import labelReducer from '@/redux/Slices/labelSlices'
import receiptReducer from '@/redux/Slices/receiptSlices'

const store = configureStore({
    reducer:{
        bank: bankReducer,
        label:labelReducer,
        receipt:receiptReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
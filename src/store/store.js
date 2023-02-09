// Redux
import { configureStore } from '@reduxjs/toolkit'

// Slices
import { authSlice } from './auth';
import { journalSlice } from './journal';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer
    },
});
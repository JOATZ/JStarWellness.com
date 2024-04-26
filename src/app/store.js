import logger from 'redux-logger'

import { configureStore } from '@reduxjs/toolkit'

//include the campsite slice in the global state object
export const store = configureStore({
    reducer: {},
    //middleware would go here, concat to default to maintain functionality
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

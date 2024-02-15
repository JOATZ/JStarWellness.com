import logger from 'redux-logger'

import { configureStore } from '@reduxjs/toolkit'

import { campsitesReducer } from '../features/campsites/campsitesSlice'
import { commentsReducer } from '../features/comments/commentsSlice'
import { partnersReducer } from '../features/partners/partnersSlice'
import { promotionsReducer } from '../features/promotions/promotionsSlice'
import { userReducer } from '../features/users/userSlice'

//include the campsite slice in the global state object
export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        promotions: promotionsReducer,
        partners: partnersReducer,
        user: userReducer
    },
    //middleware would go here, concat to default to maintain functionality
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger])
})

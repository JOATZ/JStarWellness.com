import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { baseUrl } from '../../app/shared/baseUrl'
import { mapImageURL } from '../../utils/mapImageURL'

//not using this when using db : import { CAMPSITES } from '../../app/shared/CAMPSITES'

//thunk action creator, fetch CAMPSITES data
export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites', //1st arg, action type, string that is sliceName
    //2nd arg is async func
    async () => {
        const response = await fetch(baseUrl + 'campsites')
        //handle errors
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        //transform to json and return data
        const data = await response.json()
        return data
    }
)

//create initial state set to empty array for thunk fetch,
const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
}
//create the initial state object, add reducers for thunk handling
const campsiteSlice = createSlice({
    name: ' campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false
            state.errMsg = ''
            state.campsitesArray = mapImageURL(action.payload)
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Fetch failed' //doe sit have an err msg? if not use generic
        }
    }
})
//export the automatically attached reducer method
export const campsitesReducer = campsiteSlice.reducer

//use state as an import parameter
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray
}

export const selectCampsiteById = (id) => (state) => {
    //returns the func w param of state to campistedetailpage
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    )
}

export const selectFeaturedCampsite = (state) => {
    return {
        featuredItem: state.campsites.campsitesArray.find(
            (campsite) => campsite.featured
        ),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    }
}

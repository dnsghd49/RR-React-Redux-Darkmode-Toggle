import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 10245,
    apiData: {}
}

export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        clearBtn: () => {
            return initialState
        },
        nextBtn: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        backBtn: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        },
        setData: (state, action) => {
            return { ...state, apiData: action.payload }
        },
        inputAct: (state, action) => {
            return { ...state, objectId: action.payload }
        }
    }
})

export const { inputAct, clearBtn, nextBtn, backBtn, setData } = counterSlice.actions

export const triggerThunk = () => {
    const fetchAPI = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchAPI
}

export default counterSlice.reducer
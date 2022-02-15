import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 10245,
    apiData: {}
}

export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        triggerThunk: (state) => {
            return { value: state.value + 1 }
        },
        clearBtn: (state) => {
            return { value: state.value - 1 }
        },
        nextBtn: (state, action) => {
            return { value: state.value + action.payload }
        },
        backBtn: (state, action) => {
            return { value: state.value + action.payload }
        }
    }

    // useEffect(() => {
    //     document.title = 'Welcome to Artworld'
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    //         .then(response => response.json())
    //         .then(resData => setData(resData))
    // }, [artId])

    // const handleIterate = (e) => {
    //     setArtId(artId + Number(e.target.value))
    // }
})

export const { triggerThunk, clearBtn, nextBtn, backBtn } = counterSlice.actions

export default counterSlice.reducer
import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const reactSlice = createSlice({
    name : "redux toolkit" ,
    initialState : initialState,

    // reducers contain properties and functions
    reducers : {

        addDetail : (state , action)=> {
    
            state.value = state.value + action.payload.n
        } ,

        removeDetail : (state , action)=> {

            state.value = state.value - action.payload
        },

    }
})

export const {addDetail , removeDetail} = reactSlice.actions

export default reactSlice.reducer
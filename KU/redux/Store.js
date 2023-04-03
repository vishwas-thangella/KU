import { createSlice, configureStore } from '@reduxjs/toolkit';

const Slice = createSlice({
    name:"slice",
    initialState:{
        Auth:false
    },
    reducers:{
        setAuth(state,actions){
            state.Auth = actions.payload;
        }
    }
});

const Store = configureStore({
    reducer:Slice.reducer
});

const Actions = Slice.actions;

export { Actions,Store };
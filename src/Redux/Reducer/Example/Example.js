import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    INIT_ARRAY: []
};


const ExampleReducer = createSlice({
    initialState: { ...INITIAL_STATE },
    name: "ExampleReducer",
    reducers: {
        addDataRedux: (state, action) => {
            const data = action.payload;
            state.INIT_ARRAY = [...data];
        },
    }
});

export const {
    addDataRedux,
} = ExampleReducer.actions;

export default ExampleReducer.reducer;
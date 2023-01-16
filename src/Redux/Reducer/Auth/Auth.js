import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    authToken: "" 
};


const AuthReducer = createSlice({
    initialState: { ...INITIAL_STATE },
    name: "Auth",
    reducers: {
        authToken: (state, action) => {
            const data = action.payload;
            state.authToken = data;
        },
    }
});

export const {
    authToken,
} = AuthReducer.actions;

export default AuthReducer.reducer;
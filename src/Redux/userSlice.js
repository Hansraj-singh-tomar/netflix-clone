import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        addUser(state, action) {
            // state = action.payload // we con't dp like this 
            return action.payload;
        },
        removeUser(state, action) {
            // state = null; // we can't do like this 
            return null;
        }
    }
})

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;

// https://e-dashboard-backend-otm3.onrender.com/register
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  User  from "../../interface/interface";
import axios from "axios";

const initialState: User[] = [];

export const getUser:any = createAsyncThunk(
    "users/getAIUser",
    async () => {
        const response = await axios.get("http://localhost:8080/user");
        return response.data;
    }
);
export const adduser:any= createAsyncThunk("user/addUser",
    async (user)=>{
        const response = wait axios.post("http://localhost:8080/user",user)
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: initialState
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state:any,action:any) => {
                // handle loading state if needed
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.users=action.payload;
                
            })
            .addCase(getUser.rejected, (state) => {
                // handle error state if needed
            })
            .addCase(getUser.fulfilled, (state:any,action:any)=>{
                state.user.push(action.payload)
            })
    },
});

export default userSlice.reducer;

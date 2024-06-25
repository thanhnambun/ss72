
import { configureStore } from "@reduxjs/toolkit";
import reducersUser from "./reducer/reducersUser"
import postReducer from './reducer/postReducer';

const store = configureStore({
    reducer:{
        count:reducersUser,
        posts: postReducer,
    }
})
// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
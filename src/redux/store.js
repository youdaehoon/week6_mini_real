import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer";
import boardReducer from "./reducers/boardReducer";

const store = configureStore({
    reducer:{
        userReducer,
        boardReducer,
    }
})

export default store;
import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer";
import boardReducer from "./reducers/boardReducer";
import commentReducer from "./reducers/commentReducer";

const store = configureStore({
    reducer:{
        userReducer,
        boardReducer,
        commentReducer,
    }
})

export default store;
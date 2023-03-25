import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {useDispatch} from "react-redux";
import authReducer from "./reducer/authReducer.js";


export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...([logger]))
})

export const useAppDispatch = useDispatch
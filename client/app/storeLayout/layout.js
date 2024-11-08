"use client"
import { Provider } from "react-redux";
import {store} from "../../store/index.js";
import { useEffect } from "react";
import UseAuth from "../UseAuth.js";

const Layout = ({children})=>{
return (
    <Provider store={store}>

        {children}
    </Provider>
)
};

export default Layout;
"use client"
import { Provider } from "react-redux";
import {store} from "../../store/index.js";

const Layout = ({children})=>{
return (
    <Provider store={store}>
        {children}
    </Provider>
)
};

export default Layout;
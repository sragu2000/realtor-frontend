import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Pages/Login.js'
function ProtectedRoute(props) {

    if (localStorage.getItem("realtorSuit") === null) {
        
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={props.path} element={props.element} />
                </Routes>
            </BrowserRouter>
        );
    }

}
export default ProtectedRoute;
import React, { useContext } from "react";
//import App from "../App";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import { Context } from "../service/AuthContext";

const AppRouter = () =>{

    const {isAuthenticated} = useContext(Context);
    
    return(
        <Routes>
            {/* Начальная страница */}
            <Route path="/" element={ isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} /> 

            {/* Окна регистрации и логина */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />

            {isAuthenticated && <Route path="/home" element={<MainPage  />} />}

            <Route path="/*" element={ isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}  />
        </Routes>
    );
    
}

export default AppRouter;
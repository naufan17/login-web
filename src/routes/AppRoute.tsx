import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Dashboard from '../pages/Dashboard';
import NotFound from "../pages/NotFound";

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/logout" element = {<Logout/>}/>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;
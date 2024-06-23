import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Dashboard from '../pages/Dashboard';
import NotFound from "../pages/NotFound";
import ProtectRoute from '../middleware/ProtectRoute';
import GuestRoute from '../middleware/GuestRoute';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/register" element = {<GuestRoute><Register/></GuestRoute>}/>
            <Route path = "/login" element = {<GuestRoute><Login/></GuestRoute>}/>
            <Route path = "/logout" element = {<ProtectRoute><Logout/></ProtectRoute>}/>
            <Route path = "/dashboard" element = {<ProtectRoute><Dashboard/></ProtectRoute>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;
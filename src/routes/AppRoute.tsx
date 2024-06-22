import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from '../pages/Dashboard';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;
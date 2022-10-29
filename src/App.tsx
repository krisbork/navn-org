import React from 'react';
import './App.css';
import NavBar from "./components/nav-bar/NavBar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    );
}

export default App;
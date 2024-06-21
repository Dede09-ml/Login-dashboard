import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/login'
import Homepage from './components/homepage/homepage'
import Dashboard from './components/dashboard/dashboard'
import { useState } from "react";


function App() {
    const [dataLogin, setDataLogin] = useState("")

    function handleNama(data){
        setDataLogin(data)
    }
    return (
        <BrowserRouter>

            <Routes>
                <Route exact path='/Login-dashboard' element={<Login nama={handleNama}/>}></Route>
                <Route exact path='/homepage' element={<Homepage signName={dataLogin}/>}></Route>
                <Route exact path='/dashboard' element={<Dashboard signName={dataLogin}/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}



export default App;

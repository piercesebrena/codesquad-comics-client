import React from 'react'
import { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Login from '../src/components/Login';
import SignUp from '../src/components/SignUp';
import About from '../src/components/About';
import  Admin from '../src/components/Admin';
import Create from '../src/components/Create';
import Home from '../src/components/Home';
import Update from '../src/components/Update';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Routes, Route } from "react-router-dom";


function App() {
const[user,setUser] = useState ({});


const App = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {};
    });

    return (
        <div className="App">
            <Header /> 
            <Routes>
                <Route path ="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path ="/admin" element={<Admin/>} />
                <Route path="/create" element={<Create />} />
                <Route path ="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path ="/update" element={<Update/>} />
            </Routes>
            <Login user={user} setUser={setUser} />
            <SignUp user={user} setUser={setUser} />
            <About />
        </div>
);
}
    
}

export default App;


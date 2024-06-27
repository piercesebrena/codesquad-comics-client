import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import About from '../src/components/About';
import  Admin from '../src/components/Admin';
import Create from '../src/components/Create';
import Home from '../src/components/Home';
import Update from '../src/components/Update';
import Header from '../src/shared/Header';
import Footer from '../src/shared/Footer';



function App() {
const[user,setUser] = useState ({});


const App = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('userInfo');
        return savedUser ? JSON.parse(savedUser) : {};
    });

    return (
        <div className="App">
            <Header user={user} setUser={setUser}></Header>
             <Login user={user} setUser={setUser} />
            <Signup user={user} setUser={setUser} />
            <About />
            <Admin />
            <Create />
            <Home />
            <Login />
            <Update />
            <footer />
        </div>
);
}  
}

export default App;




import React from 'react'
import { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import About from '../src/components/About';
import  Admin from '../src/components/Admin';
import Create from '../src/components/Create';
import Home from '../src/components/Home';
import Update from '../src/components/Update';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';



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
            <Login user={user} setUser={setUser} />
            <Signup user={user} setUser={setUser} />
            <About />
        </div>
);
}
    
}

export default App;


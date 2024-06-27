import React, { useState, useEffect } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import About from './components/About'
import Admin from './components/Admin';
import Create from './components/Create';
import Login from './components/Login';
import Update from './components/Update';


function App() {
  const [userInfo, setUser] = useState(JSON.parse(localStorage.getItem("userInfo")) || {});

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <main>
        <About />
        <Admin />
        <Create />
        <Home />
        <Login />
        <Update />
      </main>
      <Footer />
    </div>
  );
}

export default App;


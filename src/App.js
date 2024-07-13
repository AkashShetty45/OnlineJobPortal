import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login from './components/login/Login.jsx';
import Signup from './components/login/Signup.jsx';
import About from './components/Aboutus/About.jsx';
import Profile from './components/profile/profile.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
     
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

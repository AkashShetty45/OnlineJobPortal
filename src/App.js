import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ApplyJobs from './components/ApplyJobs';  // Import ApplyJobs component
import PostJob from './components/PostJob';  // Import PostJob component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login.jsx';
import Signup from './components/login/Signup.jsx';
import About from './components/Aboutus/index.jsx';
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
            <Route path="/apply-jobs" element={<ApplyJobs />} />  {/* Add route for ApplyJobs */}
            <Route path="/post-job" element={<PostJob />} />  {/* Add route for PostJob */}
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

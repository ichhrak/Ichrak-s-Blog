import TopBar from "./components/topbar/TopBar.jsx";
import Home1 from "./pages/home/Home1";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home1 />}/>
        <Route path="/posts" element={<Home1 />}/>
        <Route path="/login" element={currentUser ? <Home1 /> : <Login />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/register" element={currentUser ? <Home1 /> : <Register />}/>
        <Route path="/post/:id" element={currentUser ? <Settings /> : <Login />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>     
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Nav from "./components/Nav";
import Favorites from "./components/Favorites";
import Coffee from "./components/Coffee";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Coffee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

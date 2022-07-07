import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

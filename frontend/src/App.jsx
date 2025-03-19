import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Quote />}></Route>
        <Route path="/quotes" element={<Quote />}></Route>
        <Route path="/quotes/random" element={<Quote />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

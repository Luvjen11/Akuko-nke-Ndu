import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import "./App.css";
import NewQuote from "./components/NewQuote";
import AllQuotes from "./components/AllQuotes";
import FavoriteQuotes from "./components/FavoriteQuotes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quote />}></Route>
        <Route path="/quotes" element={<Quote />}></Route>
        <Route path="/quotes/random" element={<Quote />}></Route>
        <Route path="/add-quote" element={<NewQuote />}></Route>
        <Route path="/all-quotes" element={<AllQuotes />}></Route>
        <Route path="/favorites" element={<FavoriteQuotes />} />
      </Routes>
    </Router>
  );
}

export default App;

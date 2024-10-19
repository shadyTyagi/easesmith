import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <div>
      <div className="bg-transparent">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;

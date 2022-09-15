import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Navbar from "./SharedCompo/Header/Navbar";

// import TestHeader from "./SharedCompo/Header/TestHeader";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ToastContainer />
    </div>
  );
}
export default App;

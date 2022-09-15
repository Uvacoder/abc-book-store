import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import MainHeader from "./SharedCompo/Header/MainHeader";

function App() {
  return (
    <div>
      <MainHeader/>
      <Home/>
      
      <ToastContainer />
    </div>
  );
}
export default App;
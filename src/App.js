import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import ModalSignUp from "./Pages/Register/ModalSignUp";
import SignInModal from "./Pages/Register/SignInModal";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<ModalSignUp/>}/>
        <Route path="/signin" element={<SignInModal/>}/>
      </Routes>
      
      <ToastContainer />
    </div>
  );
}
export default App;

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Header from "./SharedCompo/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <ToastContainer />
    </div>
  );
}
export default App;

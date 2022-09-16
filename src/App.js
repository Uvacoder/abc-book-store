import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Editorial from "./Pages/Editorial/Editorial";
import MainHeader from "./SharedCompo/Header/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <Editorial />
      <ToastContainer />

    </div>
  );
}
export default App;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Editorial from "./Pages/Editorial/Editorial";
import BottomToTop from "./SharedCompo/BottomToTop/BottomToTop";
import MainHeader from "./SharedCompo/Header/MainHeader";

function App() {
  return (
    <div>
      <BottomToTop />
      <MainHeader />
      <Editorial />
      <Editorial />
      <ToastContainer />

    </div>
  );
}
export default App;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainHeader from "./components/Header/MainHeader";
// import Header from "./SharedCompo/Header";

function App() {
  return (
    <div>
      <MainHeader />
      {/* <Header /> */}
      <ToastContainer />
    </div>
  );
}
export default App;
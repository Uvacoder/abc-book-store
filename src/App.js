import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./SharedCompo/Header";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
    </div>
  );
}
export default App;

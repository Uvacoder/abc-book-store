import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="h-screen">
      <Login></Login>
      <SignUp></SignUp>
      {/* bg-dark-blue bg-main bg-contain */}
      {/* <h1 className="text-5xl text-center p-4 font-mono font-black text-white">
        React Initial Project set-up
      </h1>
      <h4 className="text-2xl p-2 text-center font-mono font-black text-white">
        Tech: Tailwind, React-router, react-toastify,
        daisyUI,react-spinner-loader, React Hook Form.
      </h4>
      <h6>Please Check any dependency need to install</h6> */}
      <ToastContainer />
    </div>
  );
}
export default App;

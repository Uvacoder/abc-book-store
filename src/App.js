import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Header/Navbar";
import Books from "./Pages/Books";

function App() {
  return (
    <div className="h-screen bg-dark-blue bg-main bg-contain">
      <Navbar></Navbar>
      <Books></Books>
    </div>
  );
}
export default App;

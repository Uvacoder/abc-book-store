import "react-toastify/dist/ReactToastify.css";
import MainHeader from "./components/Header/MainHeader";
import Books from "./Pages/Books";

function App() {
  return (
    <div className="h-screen bg-dark-blue bg-main bg-contain">
      <MainHeader></MainHeader>
      <Books></Books>
    </div>
  );
}
export default App;

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetails from "./components/Books/BookDetails.jsx";
import Login from "./components/SignIn/Login.jsx";
import SignUp from "./components/SignUp/SignUp";
import Review from "./SharedCompo/Review/Review.jsx";

function App() {
  return (
    <div className="h-screen">
      <BookDetails></BookDetails>
      <Review></Review>

    {/* <Login></Login>
      <SignUp></SignUp> */}
    
      <ToastContainer />
    </div>
  );
}
export default App;

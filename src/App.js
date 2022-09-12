import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
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
    
=======
import Header from "./SharedCompo/Header";

function App() {
  return (
    <div>
      <Header/>
>>>>>>> 2e7d68ee5b97a46c44453123e9a998e4a0dd3dc9
      <ToastContainer />
    </div>
  );
}
export default App;

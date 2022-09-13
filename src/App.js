// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "./SharedCompo/Header";
import BookDetails  from './components/Books/BookDetails'
import Review from './SharedCompo/Review/Review';

function App() {
  return (
    <div>
      <Header/>
      <BookDetails/>
      <Review/> 
    
      {/* <ToastContainer /> */}
      
    </div>
  );
}
export default App;

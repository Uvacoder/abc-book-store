import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AcademicMain from "./Pages/Academic/AcademicMain";
import AudioBooksMain from "./Pages/AudioBooks/AudioBooksMain";
import BooksMain from "./Pages/Books/BooksMain";
import CrimeMain from "./Pages/Crime/CrimeMain";
import EbooksMain from "./Pages/E-Books/EbooksMain";
import FictionMain from "./Pages/FictionBooks/FictionMain";
import Home from "./Pages/Home/Home";
import KidsMain from "./Pages/Kids/KidsMain";
import NovelMain from "./Pages/Novels/NovelMain";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Singup/Signup";
import StationaryMain from "./Pages/Stationary/StationaryMain";
import ProductDetails from "./Pages/ToysGames/ProoductDetails";
import ToysGamesMain from "./Pages/ToysGames/ToysGamesMain";
import Footer from "./SharedCompo/Footer/Footer";
import Navbar from "./SharedCompo/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksMain />} />
        <Route path="/fiction" element={<FictionMain />} />
        <Route path="/novel" element={<NovelMain />} />
        <Route path="/crime" element={<CrimeMain />} />
        <Route path="/kids" element={<KidsMain />} />
        <Route path="/academic" element={<AcademicMain />} />
        <Route path="/ebooks" element={<EbooksMain />} />
        <Route path="/audioBooks" element={<AudioBooksMain />} />
        <Route path="/toysGames" element={<ToysGamesMain />} />
        <Route path="/toysGames/:toysId" element={<ProductDetails />} />
        <Route path="/stationary" element={<StationaryMain />} />
      </Routes>
      <Footer />
    </div>
  );
}
<ToastContainer />;
export default App;

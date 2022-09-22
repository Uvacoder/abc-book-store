import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AcademicDetails from "./Pages/Academic/AcademicDetails";
import AcademicMain from "./Pages/Academic/AcademicMain";
import AudioBookDetails from "./Pages/AudioBooks/AudioBookDetails";
import AudioBooksMain from "./Pages/AudioBooks/AudioBooksMain";
import BookDetails from "./Pages/Books/BookDetails";
import BooksMain from "./Pages/Books/BooksMain";
import EbookDetails from "./Pages/E-Books/EbookDetails";
import EbooksMain from "./Pages/E-Books/EbooksMain";
import FictionDetails from "./Pages/FictionBooks/FictionDetails";
import FictionMain from "./Pages/FictionBooks/FictionMain";
import Home from "./Pages/Home/Home";
import KidDetails from "./Pages/Kids/KidDetails";
import KidsMain from "./Pages/Kids/KidsMain";
import NovelDetails from "./Pages/Novels/NovelDetails";
import NovelMain from "./Pages/Novels/NovelMain";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Singup/Signup";
import StationaryDetails from "./Pages/Stationary/StationaryDetails";
import StationaryMain from "./Pages/Stationary/StationaryMain";
import ToyGamesDetails from "./Pages/ToysAndGame/ToyGamesDetails";
import ToysHome from "./Pages/ToysAndGame/ToysHome";
import Footer from "./SharedCompo/Footer/Footer";
import Navbar from "./SharedCompo/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksMain />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/fiction" element={<FictionMain />} />
        <Route path="fiction/:id" element={<FictionDetails/>} />
        <Route path="/novel" element={<NovelMain />} />
        <Route path="/novel/:id" element={<NovelDetails/>} />
        <Route path="/kidBooks" element={<KidsMain />} />
        <Route path="/kidBook/:id" element={<KidDetails/>} />
        <Route path="/academic" element={<AcademicMain />} />
        <Route path="/academic/:id" element={<AcademicDetails />} />
        <Route path="/ebooks" element={<EbooksMain />} />
        <Route path="/ebook/:id" element={<EbookDetails />} />
        <Route path="/audioBooks" element={<AudioBooksMain />} />
        <Route path="/audioBook/:id" element={<AudioBookDetails />} />
        <Route path="/toysGames" element={<ToysHome />} />
        <Route path="/toysGame/:id" element={<ToyGamesDetails/>} />
        <Route path="/stationary" element={<StationaryMain />} />
        <Route path="/stationary/:id" element={<StationaryDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}
<ToastContainer />;
export default App;

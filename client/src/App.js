import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbars from "./components/Navbars";
import AddFilm from "./pages/admin/AddFilm";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Details from "./pages/Details";
import Home from "./pages/Home";
import ListFilm from "./pages/ListFilm";
import Profile from "./pages/Profile";
import AddCategory from "./pages/admin/AddCategory"

function App() {
  return (
    <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Details/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/list-film" element={<ListFilm/>} />
        <Route path="/home-admin" element={<HomeAdmin/>} />
        <Route path="/add-film" element={<AddFilm/>} />
        <Route path="/add-category" element={<AddCategory />} />
      </Routes>
    </Router>
  );
}

export default App;

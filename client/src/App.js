import {Route, Routes} from "react-router-dom";
import ShowList from './components/pages/main';
import './App.css';
import AddShow from "./components/pages/add";
import Navbar from "./components/pages/navbar";
import Home from "./components/pages/home";
import Footer from "./components/utils/footer";
import "./footer.css";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import Series from "./components/pages/series";

const App = () => {
  return(
    <div className="banner">
      <Navbar/>
      <Routes>
        <Route exact path="/shows" element={<ShowList/>}/>
        <Route path="/shows/add" element={<AddShow/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/series/:id/:title" element={<Series />}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

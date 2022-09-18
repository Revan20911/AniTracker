import {Route, Routes} from "react-router-dom";
import ShowList from './components/main';
import './App.css';
import AddShow from "./components/add";
import Navbar from "./components/navbar";
import Home 

from "./components/home";

import Footer from "./components/utils/footer";
import "./styles/footer.css";
import Login from "./components/login";

const App = () => {
  return(
    <div className="banner">
      <Navbar/>
      <Routes>
        <Route exact path="/shows" element={<ShowList/>}/>
        <Route path="/shows/add" element={<AddShow/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};


export default App;

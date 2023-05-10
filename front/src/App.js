import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar';
//import SearchBar from './components/second';
//import Description from './components/descriptionhome';
//import OtherServices from './components/otherhome';
import Footer from './components/footer';
import AboutUs from './components/aboutus';
import Home from './components/home';
import { Routes,Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route exact path='/'Component={Home}/>
        <Route  path='/aboutus'Component={AboutUs}/>
        
        </Routes>
        

      
      <Footer/>
     
      

      

      
    </div>
  );
}

export default App;

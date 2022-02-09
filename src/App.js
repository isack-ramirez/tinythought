
//Dependencies 
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components 


//Pages
import Discover from './pages/Discover';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Toggle from './components/Toggle';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Toggle/>
      <Router>
        <Menu/>
      <Routes>
        <Route exact path = '/' element={<Discover/>}/>
        <Route path = '/profile' element={<Profile/>}/>
        <Route path = '/feed' element={<Feed/>}/>
       </Routes>



      </Router>
      

      
   
    </div>
  );
}

export default App;

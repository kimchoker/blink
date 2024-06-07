import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cards from './pages/Card';
import Main from './pages/Main';
import { Route, Routes, Link } from 'react-router-dom';
import HeaderBar from './utils/HeaderBarNavi';


function App() {
  return (
   <div>
    <HeaderBar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='card' element={<Cards/>}/>
      </Routes>
   </div>
  );
}

export default App;

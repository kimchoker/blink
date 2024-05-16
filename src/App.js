import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
   <div>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Main/>}/>
    </Routes>
   </div>
  );
}

export default App;

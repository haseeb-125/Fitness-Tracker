
import { Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import './App.css';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Register from './Register.jsx';
import About from './About.jsx';
const App = () => {
  return (
  <>
  <AuthProvider>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path='/About' element={<About/>}/>
  </Routes>
  </AuthProvider>
  </>
  );
};

export default App;

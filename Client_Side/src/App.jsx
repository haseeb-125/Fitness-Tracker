
import { Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import './App.css';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Register from './Register.jsx';
const App = () => {
  return (
  <>
  <AuthProvider>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/register" element={<Register />} />
  </Routes>
  </AuthProvider>
  </>
  );
};

export default App;


import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.css';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Register from './Register.jsx';
const App = () => {
  return (
  <>
  <AuthProvider>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path="/register" element={<Register />} />
  </Routes>
  </AuthProvider>
  </>
  );
};

export default App;

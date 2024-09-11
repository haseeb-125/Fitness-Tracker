
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.css';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
const App = () => {
  return (
  <>
  <AuthProvider>
  <Routes>
    <Route path='/' element={<Login/>} />
  </Routes>
  </AuthProvider>
  </>
  );
};

export default App;

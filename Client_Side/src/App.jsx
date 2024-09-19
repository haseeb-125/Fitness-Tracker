
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.css';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Register from './Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx'
import ProfilePage from './components/user_account/ProfilePage.jsx';
import EditProfile from './components/user_account/EditProfile.jsx'
import Db from './Db.jsx'
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profilepage" element={<ProtectedRoute element={ProfilePage} />} />
          <Route path="/update/:userId" element={<ProtectedRoute element={EditProfile} />} />
          <Route path="/db/*" element={<ProtectedRoute element={Db} />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;

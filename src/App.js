import './App.css';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './Main';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './ProtectedRoute';
import CryptoDetail from './CryptoDetail';
import VerMiPerfil from './VerMiPerfil';
import Nosotros from './Nosotros';
import Seguridad from './Seguridad';
import Configuracion from './Configuracion';



function App() {
  return (
    <div className="textForm">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/crypto/:id" element={<CryptoDetail/>}/>
          <Route path="/miperfil" element={<VerMiPerfil/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/configuracion" element={<Configuracion/>}/>
          <Route path="/seguridad" element={<Seguridad/>}/>
        </Routes>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;


import './App.css';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="textForm">
       <BrowserRouter>
       <Login/>
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
        </BrowserRouter>
    </div>
  );
}

export default App;


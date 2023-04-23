import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Explore from "./pages/Explore";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Forgot from "./pages/Forgot";
import Offer from "./pages/Offer";
import Nav from "./Components/Nav";
import PrivateRoute from './Components/PrivateRoute';



function App() {
  return (
    <div className="bg">
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path='/offers' element={<Offer />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign_in' element={<Signin />} />
          <Route path='/sign_up' element={<Signup />} />
          <Route path='/forgot_password' element={<Forgot />} />
        </Routes>
        {/* Navbar */}
        <Nav />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Explore from "./pages/Explore";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import CreateListing from "./pages/CreateListing";
import Forgot from "./pages/Forgot";
import Offer from "./pages/Offer";
import Nav from "./Components/Nav";
import PrivateRoute from './Components/PrivateRoute';
import Category from "./pages/Category";



function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path='/offers' element={<Offer />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign_in' element={<Signin />} />
          <Route path='/sign_up' element={<Signup />} />
          <Route path='/forgot_password' element={<Forgot />} />
          <Route path='/Create-Listing' element={<CreateListing />} />
        </Routes>
        {/* Navbar */}
        <Nav />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

import Header from './Components/Header/Header';
import Adversiting from './Components/Advertising/Adversiting';
import SignUp from '../src/Components/SignUp/SignUp';
import MainSlider from './Components/MainSlider/MainSlider';
import Categories from "./Components/Categories/Categories";
import Main from './Components/Main/Main';
import Timer from "../src/Components/Timer/Timer";
import Products from './Components/OurProducts/Products';
import Services from './Components/Services/Services';



import Footer from '../src/Components/Footer/Footer'

import WishlistPage from './Components/Wishlist/WishlistPage';
import Selling from '../src/Components/Selling/Selling';
import Login from "../src/Components/Login/Login";
import Checkout from './Components/Checkout/Checkout';
import About from "../src/Components/About/About";
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';


//import Cart from './Components/Cart/Cart'


import Cart from './Components/Cart/Cart'







//import Adversiting from './Components/Advertising/Adversiting';

//import SignUp from '../src/Components/SignUp/SignUp';


//import MainSlider from './Components/MainSlider/MainSlider';
//import Categories from "./Components/Categories/Categories"
//import Main from './Components/Main/Main';
//import Timer from "../src/Components/Timer/Timer"
//import Products from './Components/OurProducts/Products';
//import Services from './Components/Services/Services';
//import Footer from "../src/Components/Footer/Footer"
//import WishlistPage from './Components/Wishlist/WishlistPage';
//import Selling from '../src/Components/Selling/Selling'
//import Login from "../src/Components/Login/Login";
//import Checkout from './Components/Checkout/Checkout';
//import About from "../src/Components/About/About"
//import Home from './Components/Home';
//import Contact from './Components/Contact/Contact';
//import Account from '../src/Components/Account/Account';




// ROOTER CODES
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  return (
    <div>
      <Header />
     {/* <Cart /> 

     <Account /> */}
     {/* <Account /> */}


      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      {
        location.pathname !== "/Login" &&
        location.pathname !== "/Wishlist" &&
        location.pathname !== "/SignUp" &&
        location.pathname !== "/About" &&
        location.pathname !== "/Contact" && (
          <>
            <Main />
            <Timer />
            <MainSlider />
            <Categories />
            <Selling />
            <Adversiting />
            <Products />
            <Services />
          </>
        )
      }

      <Footer />
    </div>



  )
    



  
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );

}




export default App;




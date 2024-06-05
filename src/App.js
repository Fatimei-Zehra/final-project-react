//import Adversiting from './Components/Advertising/Adversiting';
import Header from './Components/Header/Header';
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
//import SignUp from '../src/Components/SignUp/SignUp';
//import Error from '../src/Components/Error/Error';
import Account from '../src/Components/Account/Account';

// ROOTER CODES
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Account />
      {/*<Error />*/}
      {/*<SignUp />*/}
      {/*<Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
  </Routes>*/}
      {location.pathname !== "/Login" && 
       location.pathname !=="/Wishlist" && (
        <>
          
          {/*<Main />
          <Timer />
          <MainSlider />
          <Categories />
          <Selling />
          <Adversiting />
          <Products />
       <Services />*/}
        </>
      )}
    
  
      {/*<Footer />*/}
    </div>

  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </div>
  );
}
export default App;


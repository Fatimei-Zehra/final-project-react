
import Adversiting from './Components/Advertising/Adversiting';
import Header from './Components/Header/Header';
import MainSlider from './Components/MainSlider/MainSlider';
import Categories from "./Components/Categories/Categories"
import Main from './Components/Main/Main';
import Timer from "../src/Components/Timer/Timer"
import Products from './Components/OurProducts/Products';
import Services  from './Components/Services/Services';
import Footer from "../src/Components/Footer/Footer"
import Selling from '../src/Components/Selling/Selling'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Timer />
      <MainSlider />
      <Categories/>
      <Selling/>
      <Adversiting />
      <Products />
      <Services/>
      <Footer/>
    </div>
  );
}
export default App;



import Adversiting from './Components/Advertising/Adversiting';
import Header from './Components/Header/Header';
import MainSlider from './Components/MainSlider/MainSlider';
import Main from './Components/Main/Main';
import Timer from "../src/Components/Timer/Timer"
import Products from './Components/OurProducts/Products';
import Footer from "../src/Components/Footer/Footer"



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Timer />
      <MainSlider />
      <Adversiting />
      <Products />
      <Footer/>
    </div>
  );
}
export default App;


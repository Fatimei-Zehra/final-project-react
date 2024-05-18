
import Adversiting from './Components/Advertising/Adversiting';
import Header from './Components/Header/Header';
import MainSlider from './Components/MainSlider/MainSlider';
import Main from './Components/Main/Main';
import Timer from "../src/Components/Timer/Timer"



function App() {
  return (
    <div className="App">
      <Header/>  
      <Main/>
      <Timer/>
      <MainSlider/>
      <Adversiting/>
    
    </div>
  );
}
export default App;

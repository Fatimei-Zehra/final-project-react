
import Header from './Components/Header/Header';
import MainSlider from './Components/MainSlider/MainSlider';
import Main from './Components/Main/Main';
import Timer from './Components/Timer/Timer'
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Header/>  
      <Main/>
      <Timer/>
      <MainSlider/>
      <Categories/>
    </div>
  );
}

export default App;   
import {Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import BeerInfo from "./pages/BeerInfo";





function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} /> 
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer" element={<RandomBeer />}/>
        <Route path="/BeerInfo/:beerId" element={<BeerInfo />} />
        </Routes>
    </div>
  );
}

export default App;

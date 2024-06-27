import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import SideBar from './Components/SideBar';
import PopularProduct from './Pages/PopularProduct';
import Add from './Pages/Add';
import TopSales from './Pages/TopSales';
import Catagories from './Pages/Catagories';
import Banner from './Pages/Banner';
import NewCollection from './Pages/NewCollection';
import NewArrival from './Pages/NewArrival';
import Footer from './Pages/Footer';


function App() {
  return (
  <>
  <Header/>
  <div className=' flex'>
    <div>
        <SideBar/>
      </div>
        <div className=' p-6'>
          
          <Home/>
          <PopularProduct/>
         
          
        </div>
  </div>
          <Add/>
          <TopSales/>
          <Catagories/>
          <Banner/>
          <NewCollection/>
          <NewArrival/>
          <Footer/>
  </>
  );
}

export default App;

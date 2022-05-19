import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import CardListContainer from './components/CardListContainer/CardListContainer';
import LoadMore from './components/LoadMore/LoadMore';



function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Banner/>
      <Search/>
      <CardListContainer/>
        <Routes>
          <Route exact path='/'/>
        </Routes>
        <LoadMore/>
      <Footer/>
    </BrowserRouter>
            
  );
}

export default App;

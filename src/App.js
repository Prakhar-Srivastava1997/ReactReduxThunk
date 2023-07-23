
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchedProduct from './components/SearchedProduct/SearchedProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/products/:id' element = {<ProductDetails/>}></Route>
          <Route path='/products/category/:category' element={<SearchedProduct/>}></Route>
        </Routes><br/>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

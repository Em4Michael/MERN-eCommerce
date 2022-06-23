import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import ProductScreen from './components/Product/productScreen';
import ProductDetails from './components/ProductDetails/ProductDetails'
//import Products from './components/Pages/Products'
import Services from './components/Pages/Services'
import Home from './components/Pages/Home'
import SignUp from './components/Pages/SignUp'
import ContactUs from './components/Pages/ContactUs'
import Cart from './components/Pages/Cart'


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='row'>
        <main>
          <Routes>
            <Route path='/' element={<ProductScreen />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/Products' element={<ProductScreen />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

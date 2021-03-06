import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './'
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
import SideBar from './components/generalSettings/sideBar';
import Center from './components/center/Center';
import Signup from './components/signup/Signup';
import BVN from './components/signup/BVN';
import ImageCapture from './components/signup/imageCapture';
import SetPassword from './components/signup/setPassword';
import Transaction from './components/signup/Transaction'
import SecurityQuestion from './components/signup/SecurityQuestion';
import Activate from './components/signup/Activate';
import exportAsImage from './components/signup/Img';


const App = () => {
  return (
    <Router>
      {/* <Activate /> */}
      
      {/* <SecurityQuestion /> */}
      {/* <Transaction /> */}
     {/*  <SetPassword /> */}
    {/*   <ImageCapture /> */}
      {/* <BVN /> */}
     {/* <Signup />  */}
     {/*  <SideBar />
      <Center /> */}
       <Routes>
            <Route path='MERN-eCommerce/activate' element={<Activate />} />
            <Route path='MERN-eCommerce/securityquestion' element={<SecurityQuestion />} />
            <Route path='MERN-eCommerce/transaction' element={<Transaction />} />
            <Route path='MERN-eCommerce/setPassword' element={<SetPassword />} />
            <Route path='MERN-eCommerce/imagecapture' element={<ImageCapture />} />
            <Route path='MERN-eCommerce/bvn' element={<BVN />} />
            <Route path='MERN-eCommerce/' element={<Signup />} />
            
            <Route path='MERN-eCommerce/sideBar' element={<SideBar />} />
            <Route path='MERN-eCommerce/center' element={<Center />} />
            <Route path='MERN-eCommerce/exportAsImage' element={<exportAsImage />} />
          </Routes>
      {/* <Header /> */}
       {/*  <Navbar /> 
       
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
     {/*  <Footer /> */} 
    </Router>
  );
}

export default App;

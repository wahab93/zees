import { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './component/home';
import { Navbar } from './component/navbar';
import { Products } from './component/products';
import { Product } from './component/product';
import { Cart } from './component/cart';
import { Checkout } from './component/checkout';
import { Register } from './component/register';
import { Login } from './component/login';
import { Aboutus } from './component/aboutus';
import { useDispatch } from 'react-redux'
import { addCart } from './redux/action'
import { Footer } from './component/footer'
import { Contactus } from './component/contactus'
import ScrollToTop from './component/scrolltotop'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   const product = localStorage.getItem('SelectedItem')
   if(product){
    dispatch(addCart(product))
   }
  }, [])
  
  return (
    <>
    <Router>
    <ScrollToTop /> 
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;

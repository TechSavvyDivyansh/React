import './App.css';

import Navbar from './components/navbar/navbar.jsx';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignup from './pages/LoginSignUp.jsx'
import Footer from './components/Footer/Footer.jsx';

import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'


function App() 
{
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/Men' element={<ShopCategory banner={men_banner} category='men' />} />
                <Route path='/Women' element={<ShopCategory banner={women_banner} category='women' />} />
                <Route path='/Kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
                <Route path='/Product' element={<Product />}>
                    <Route path=':productId' element={<Product />}/>
                </Route>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='/login' element={<LoginSignup />}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

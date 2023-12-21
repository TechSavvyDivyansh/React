import './App.css';

import Navbar from './components/navbar/navbar.jsx';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignup from './pages/LoginSignUp.jsx'



function App() 
{
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/Men' element={<ShopCategory category='Men' />} />
                <Route path='/Women' element={<ShopCategory category='Women' />} />
                <Route path='/Kids' element={<ShopCategory category='Kids' />} />
                <Route path='/Product' element={<Product />}>
                    <Route path=':productId' element={<Product />}/>
                </Route>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='/login' element={<LoginSignup />}/>

            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;

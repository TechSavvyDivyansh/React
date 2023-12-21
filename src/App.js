import './App.css';

import Navbar from './components/navbar/navbar.jsx';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import shop from './pages/shop.jsx';
import shopCategory from './pages/shopCategory.jsx';
import product from './pages/product.jsx'
import cart from './pages/cart.jsx'
import loginSignup from './pages/loginSignUp.jsx'



function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<shop />} />
                <Route path='/Men' element={<shopCategory category='Men' />} />
                <Route path='/Women' element={<shopCategory category='Women' />} />
                <Route path='/Kids' element={<shopCategory category='Kids' />} />
                <Route path='/product' element={<product />}>
                    <Route path=':productId' element={<product />}/>
                </Route>
                <Route path='/cart' element={<cart />}/>
                <Route path='/login' element={<loginSignup />}/>

            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;

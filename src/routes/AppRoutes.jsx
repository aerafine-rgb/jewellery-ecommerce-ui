import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import Profile from '../pages/Profile';
// import OrderConfirmation from '../pages/OrderConfirmation';
import NotFound from '../pages/NotFound';


const AppRoutes = () => {
    return ( 
    <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetail />} />  
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} /> */}
        <Route path='*' element={<NotFound />} />
        </Routes>
    );   
}

export default AppRoutes;   

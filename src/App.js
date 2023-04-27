import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import './index.js';
import { Redirect, Switch, Route} from 'react-router-dom';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';




function App() {
  return (
   <>
    <Header />
   <Switch>
 <Route exact path="/" component={Home } />
 <Route exact path="/products" component={Product } />
 <Route exact path="/products/:id" component={ProductDetail } />
 <Route exact path="/cart" component={Cart } />
 <Route exact path="/checkout" component={Checkout } />
 <Route exact path="/about" component={About } />
 <Route exact path="/contact" component={Contact } />
 <Redirect to="/" />
  </ Switch>
     </>
  );
}
export default App;





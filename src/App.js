import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import './index.js';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
   <>
    <Header />
   <Switch>
 <Route exact path="/" component={Home } />
 <Route exact path="/products" component={Products } />
 <Route exact path="/products/:id" component={Product } />
 <Route exact path="/about" component={About } />
 <Route exact path="/contact" component={Contact } />
 
  </ Switch>
     </>
  );
}
export default App;





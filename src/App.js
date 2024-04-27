import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Product from './components/Product';
import SignUp from './components/Signup';
import Welcom from './components/Welcome';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <div className='container'>
          <Switch>
            <Route component={Home} path='/'exact/>
            <Route component={Products} path='/products'exact/>
            <Route component={Cart} path='/cart'exact/>
            <Route component={WishList} path='/fave'exact/>
            <Route component={Product} path={`/product/:id`} exact/>
            <Route component={SignUp} path={`/register`} exact/>
            <Route component={Welcom} path={`/welcome`} exact/>
            <Route component={Signin} path={`/signin`} exact/>

          </Switch>

        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

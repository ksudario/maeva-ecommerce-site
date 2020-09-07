import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import DefaultProduct from './components/DefaultProduct';
import PopUp from './components/PopUp';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/details' component={ProductDetails}/>
          <Route exact path='/cart' component={Cart}/>
          <Route path='/' component={ProductList}/>
          <Route component={DefaultProduct}/>
        </Switch>
          <PopUp />
      </React.Fragment>
    );
  }
}

export default App;

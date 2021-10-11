import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/orderReview">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

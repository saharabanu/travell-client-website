import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddServices from './components/AddServices/AddServices';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>

       </Route>
       <Route path="/home">
         <Home></Home>

       </Route>
       <PrivateRoute path="/addServices">
         <AddServices></AddServices>

       </PrivateRoute>
       <PrivateRoute path="/orderPlace/:orderPlaceId">
         <OrderPlace></OrderPlace>

       </PrivateRoute>
       <PrivateRoute path="/myOrders">
         <MyOrders></MyOrders>

       </PrivateRoute>
       <Route path="/login">
         <Login></Login>

       </Route>
       <Route path="*">
         <NotFound></NotFound>

       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
   </AuthProvider>
    
      
    </div>
  );
}

export default App;

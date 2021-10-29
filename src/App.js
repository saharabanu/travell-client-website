import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddServices from './components/AddServices/AddServices';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';

function App() {
  return (
    <div className="App">
     
     <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>

       </Route>
       <Route path="/home">
         <Home></Home>

       </Route>
       <Route path="/addServices">
         <AddServices></AddServices>

       </Route>
       <Route path="/orderPlace">
         <OrderPlace></OrderPlace>

       </Route>
       <Route path="/login">
         <Login></Login>

       </Route>
       <Route path="*">
         <NotFound></NotFound>

       </Route>
     </Switch>
   </Router>
    
      
    </div>
  );
}

export default App;

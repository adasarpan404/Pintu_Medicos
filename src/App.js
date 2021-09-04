
  
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import { CartProvider } from "./Components/cartContext";
const App = () => {
  return (
    <Router>
      <div className="App">
      <CartProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
        </CartProvider>
      </div>
    </Router>
  )
};

export default App;

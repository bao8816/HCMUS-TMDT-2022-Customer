import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

//import { useSelector } from "react-redux";

const App = () => {
  return (
    <Router>
      <Routes>
	  	<Route path="/" element={<Home />} />
		<Route path="/products" element={<ProductList />} /> 
		<Route path="/product" element={<Product />} /> 
		<Route path="/cart" element={<Cart />} /> 
		<Route path="/login" element={<Login />} /> 
		<Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;

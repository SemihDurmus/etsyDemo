import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blog from "./pages/blog/Blog.js";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products.js";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blog from "./pages/blog/Blog.js";
import NavBar from "./components/navbar/NavBar";
import Products from "./pages/products/Products.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Products} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;

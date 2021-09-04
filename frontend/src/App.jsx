import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from "./styles/GlobalStyles";
import Login from "./pages/login";
import Register from "./pages/register";
import { FashionHeader, Footer } from "./components/main";
import { NavBar } from "./components/main";
import Activate from "./pages/activation";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./routers/AdminRoute";
import NewCategory from "./pages/admin/NewCategory";
import CategoryList from "./pages/admin/CategoryList";
import CategoryUpdate from "./pages/admin/CategoryUpdate";
import SubUpdate from "./pages/admin/SubCategoryUpdate";
import SubList from "./pages/admin/SubCategoryList";
import SubCreate from "./pages/admin/SubCategory";
import UpdateProduct from "./pages/admin/UpdateProduct";
import ProductLists from "./pages/admin/ProductLists";
import NewProduct from "./pages/admin/NewProduct";

// import Cart from "./Cart";
// import Category from "./Category";
import Fashion from "./pages/fashion/home";
// import WishList from "./WishList";
import { ProductMain } from "./pages/fashion/product";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <ToastContainer />
      <FashionHeader />
      <main>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route
            path="/register/complete/:token"
            exact
            render={(props) => <Activate {...props} />}
          />
          <Route path="/" component={Fashion} exact />
          <Route path="/products" component={ProductMain} exact />
          <AdminRoute path="/dashboard" component={Dashboard} exact />
          <AdminRoute path="/admin/category" component={NewCategory} exact />
          <AdminRoute path="/admin/categories" component={CategoryList} exact />
          <AdminRoute
            path="/admin/update-category/:slug"
            component={CategoryUpdate}
            exact
          />
          <AdminRoute path="/admin/sub-categories" component={SubList} exact />
          <AdminRoute
            path="/admin/update-sub/:slug"
            component={SubUpdate}
            exact
          />
          <AdminRoute path="/admin/sub-category" component={SubCreate} exact />
          <AdminRoute path="/admin/product" component={NewProduct} exact />
          <AdminRoute path="/admin/products" component={ProductLists} exact />
          <AdminRoute
            path="/admin/product/:slug"
            component={UpdateProduct}
            exact
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

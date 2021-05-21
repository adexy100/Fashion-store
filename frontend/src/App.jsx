import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./organisms/Footer";
import Header from "./organisms/NavBar/Header";
import Sidebar from "./organisms/NavBar/SideBar";
import Fashion from "./pages/Fashion/Index";
import Activate from "./pages/CompleteRegister";
import Dashboard from "./pages/Admin/Dashboard";
import AdminRoute from "./utils/AdminRoute";
import NewCategory from "./pages/Admin/NewCategory";
import CategoryList from "./pages/Admin/CategoryList";
import CategoryUpdate from "./pages/Admin/CategoryUpdate";
import SubUpdate from "./pages/Admin/SubCategoryUpdate";
import SubList from "./pages/Admin/SubCategoryList";
import SubCreate from "./pages/Admin/SubCategory";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import ProductLists from "./pages/Admin/ProductLists";
import NewProduct from "./pages/Admin/NewProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <ToastContainer />
      <Sidebar />
      <main>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route
            path="/register/complete/:token"
            exact
            render={(props) => <Activate {...props} />}
          />
          <Route path="/fashion" component={Fashion} />
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

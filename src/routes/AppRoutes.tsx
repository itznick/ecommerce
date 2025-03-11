import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
// import Home from "../pages/Home";
// import Cart from "../pages/Cart";
import NotFound from "../components/not-found/NotFound";
// import Category from "../pages/Category";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Category = lazy(() => import("../pages/Category"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:type" element={<Category />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

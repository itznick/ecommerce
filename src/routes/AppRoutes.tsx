import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../components/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React, { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { pageLinks } from "./constants";

const CartPage = React.lazy(() => import("./pages/CartPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));

export const UserContext = React.createContext()


function App() {

  const [user, setUser] = useState({})

  return (
    <Suspense fallback={<div>Loading</div>}>
      <UserContext.Provider value={[user, setUser]}>
      <Routes>
          <Route path={pageLinks.home.path} element={<HomePage />} />
          <Route path={pageLinks.cart.path} element={<CartPage />} />
          <Route path={pageLinks.login.path} element={<LoginPage />} />
          <Route path={pageLinks.product.path} element={<ProductDetails />} />
      </Routes>
      </UserContext.Provider>
    </Suspense>
  );
}

export default App;

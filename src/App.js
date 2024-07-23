import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShoppingBag from "./components/ShoppingBag";
import CheckoutPage from "./components/CheckoutPage";
import CustomerService from "./components/CustomerService";
import FavouritesPage from "./components/FavouritesPage";
import AccountPage from "./components/AccountPage";
import NewsLetter from "./components/NewsLetter";
import FindAStore from "./components/FindAStore";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // For any route that is not defined
    errorElement: <Error />,
    // Here these are added in the children because
    // we wanted them to have the same header and footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/customerservice", element: <CustomerService /> },
      { path: "/newsletter", element: <NewsLetter /> },
      { path: "/findastore", element: <FindAStore /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/favourites", element: <FavouritesPage /> },
      { path: "/shoppingbag", element: <ShoppingBag /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
    // These children will get replaced by the <Outlet/> component
  },
]);
// export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

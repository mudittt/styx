import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const cartItems = useSelector((store)=> store.cart.cartItems);
  const cartSize = Object.keys(cartItems).length;
  
  return (
    <div className="grid grid-flow-col gap-4 max-w-screen-md mx-auto">
      <Link
        to={"/customerservice"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        Customer Service
      </Link>

      <Link
        to={"/newsletter"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        Newsletter
      </Link>

      <Link
        to={"/findastore"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        Find a store
      </Link>

      <Link to={"/"} className="hover:underline col-span-8 py-5 flex justify-center items-center">
        <Logo />
      </Link>

      <Link
        to={"/account"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        My Account
      </Link>

      <Link
        to={"/favourites"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        Favourites
      </Link>

      <Link
        to={"/shoppingbag"}
        className="hover:underline flex font-light py-0 text-sm items-center justify-center"
      >
        {"Shopping Bag ["+cartSize+"]"}
      </Link>
    </div>
  );
}

export default Header;

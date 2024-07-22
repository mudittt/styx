import Logo from "./Logo";

function Header() {
  return (
    <>
    <div className="grid grid-flow-col gap-4 max-w-screen-md mx-auto">
      <p className="flex font-light py-0 text-sm items-center justify-center">Customer Service</p>
      <p className="flex font-light py-0 text-sm items-center justify-center">Newsletter</p>
      <p className="flex font-light py-0 text-sm items-center justify-center">Find a store</p>
      <div className="col-span-8 py-5 ">
      <Logo/>
      </div>
      <p className="flex font-light py-0 text-sm items-center justify-center">My Account</p>
      <p className="flex font-light py-0 text-sm items-center justify-center">Favourites</p>
      <p className="flex font-light py-0 text-sm items-center justify-center">Shopping Bag(0)</p>
    </div>
    </>
  );
}

export default Header;

import Bill from "./Bill";
import ShoppingBagItem from "./ShoppingBagItem";

function ShoppingBag() {
  return (
    <div className="max-w-screen-lg mx-auto pt-10 pb-5 text-center">
      <p className="text-3xl font-medium mb-10">Shopping bag</p>
      <div className="grid grid-flow-col">
        <div className="col-span-9">
            <ShoppingBagItem />
        </div>
        <Bill text={"Continue to checkout"} action={"/checkout"}/>
      </div>
    </div>
  );
}

export default ShoppingBag;

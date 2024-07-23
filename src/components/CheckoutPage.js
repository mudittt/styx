import Bill from "./Bill"
import AccountPage from "./AccountPage"

function CheckoutPage() {
  return (
    <div className="max-w-screen-lg mx-auto pt-10 pb-5 text-center">
      <p className="text-3xl font-medium mb-10">Checkout</p>
      <div className="grid grid-flow-col">
        <div className="col-span-9">
            <AccountPage/>
        </div>
        <Bill text={"Pay"} action={"/thankyou"}/>
      </div>
    </div>
  )
}

export default CheckoutPage
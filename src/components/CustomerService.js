function CustomerService() {
    return (
      <div className="max-w-screen-md mx-auto text-center pt-24 pb-5">
        <p className="py-5 font-medium text-4xl">Welcome to Customer Service</p>
        <p className="text-2xl py-2">How can we help you today?</p>
        <p className="text-sm">QUICK LINKS</p>
  
        <div className="grid grid-cols-2 gap-4 my-14">
          <div className="flex flex-col justify-center items-center m-1 p-4 border rounded-lg">
            <div className="mb-4 w-full">
              <p className="font-semibold my-5">I want to know where my order is</p>
              <input
                className="appearance-none w-full border py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="text"
              />
              <label className="text-left block text-gray-700 text-xs mb-2">
                Order number
              </label>
            </div>
            <button className="bg-black w-full text-white text-sm p-4 rounded-md my-4">
              Track my order
            </button>
          </div>
  
          <div className="flex flex-col justify-center items-center m-1 p-4 border rounded-lg">
            <p className="font-semibold my-5">I want to return something</p>
            <span className="text-xs font-extralight text-left block">Register returns easily online. All you need is the order number found in the order confirmation email, and the email address used when placing your order.</span>
            <span className="text-xs font-extralight text-left block">The return request must be raised with us within 15 days from the date you receive your parcel</span>
            <button className="bg-black w-full text-white text-sm p-4 rounded-md my-4">
              Register a return
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CustomerService;
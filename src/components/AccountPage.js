function AccountPage() {
  return (
    <div>
      <div className="mx-auto text-sm">
        <form className="bg-white px-8 pb-8 mb-4 text-left">
          <div className="mb-4">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="grid grid-flow-col col-span-12">
            <div className="mb-4 col-span-6 mr-1">
              <label
                className="block text-gray-700 text-xs mb-2"
                
              >
                First name
              </label>
              <input
                className="appearance-none w-full border py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
              />
            </div>
            <div className="mb-4 col-span-6 ml-1">
              <label
                className="block text-gray-700 text-xs mb-2"
                
              >
                Last name
              </label>
              <input
                className="appearance-none w-full border py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="dob">
              Date of birth
            </label>
            <div className="flex space-x-2">
              <input
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dob-day"
                type="text"
                placeholder="DD"
              />
              <input
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dob-month"
                type="text"
                placeholder="MM"
              />
              <input
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dob-year"
                type="text"
                placeholder="YYYY"
              />
            </div>
          </div>

          <div className="grid grid-flow-col col-span-12">
            <div className="mb-4 col-span-6 mr-1">
              <label className="block text-gray-700 text-xs mb-2">
                Town/City
              </label>
              <input
                className="appearance-none w-full border py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="town"
                type="text"
              />
            </div>
            <div className="mb-4 col-span-6 ml-1">
              <label className="block text-gray-700 text-xs mb-2">
                Pincode
              </label>
              <input
                className="appearance-none w-full border py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pincode"
                type="text"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xs mb-2">State</label>
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs mb-2">
              Mobile number
            </label>
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-gray-500 checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black"
              />
              <span className="ml-2 text-xs font-extralight">
                Yes, I would like to subscribe to Fashion News.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full bg-black text-white text-sm py-3 rounded-md mb-4">
              Continue to pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountPage;

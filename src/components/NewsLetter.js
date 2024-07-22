

function NewsLetter() {
  return (
    <div className="max-w-screen-md mx-auto text-left pt-10 pb-5">
        <p className="pt-5 font-medium text-4xl">H&M Fashion News Subscription</p>
        <p className="pt-10 pb-2 font-medium text-2xl">Subscribe now to experience</p>
        <p className="text-xs font-extralight">EXCLUSIVE OFFERS</p>
        <p className="text-xs font-extralight">CURATED INSPIRATION</p>
        <p className="text-xs font-extralight">NEW DROPS, COLLECTION UNVEILINGS AND MUCH MORE</p>
        <div className="my-4">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
        <div className="my-4">
            <label className="block text-gray-700 text-xs mb-2" htmlFor="email">
              Postcode
            </label>
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="postcode"
              type="postcode"
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
          
            <button className="w-full bg-black text-white text-sm py-3 rounded-md mb-4">
              Subscribe Now
            </button>
          
    </div>
  )
}

export default NewsLetter
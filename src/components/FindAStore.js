import Map from "../assets/Map.png";

function FindAStore() {
  return (
    <div className="max-w-screen-lg mx-auto pt-12 pb-5 grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <img src={Map} alt="Map" className="w-full h-auto" />
      </div>
      <div className="col-span-2">
        <div className="flex justify-between items-center font-medium mb-4">
          <span>Find a store</span>
          <span>India</span>
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
          />
          <label className="block text-gray-700 text-xs mb-2" htmlFor="email">
            65 results within 10 mi
          </label>
        </div>
        <button className="w-full bg-black text-white text-sm py-3 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
}

export default FindAStore;
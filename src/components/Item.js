import src from "../assets/0998802012/0998802012.webp";

function Item({ data }) {
  return (
    <>
      {Object.entries(data).map(([k, value]) => {
        return (
          <div key={k} className="inline-block mx-2 mb-6">
            <div className="w-64">
              {/* {value.img.map((s) => {
                return <img key={s} src={src} />;
              })} */}
              <img src={src} />
            </div>
            <div className="grid grid-flow-col py-4">
              <div className="col-span-6">
                <p className="font-light text-sm ">{value.name}</p>
                <p className="font-light text-sm ">Rs. {value.price}.00</p>
              </div>
              <div className="col-span-6 mx-auto">
                <button
                  class="select-none rounded-lg border border-gray-900 py-2 px-3 text-center align-middle font-sans text-xs text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300"
                  type="button"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Item;

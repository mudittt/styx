import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";

function Item({ data }) {
  
  // here we are dispatching an action for every time a user clicks on "add"
  
  const dispatch = useDispatch();
  const handleAddItem = (event) => {
    id = event.target.id; // extract the id of the added item
    
    // dispatch an action or
    // call addItems reducer to add that particular item in the global state: CART.
    dispatch(
      addItem({
        id: id,
      })
    );
  };

  // loop through the original(filtered/unfiltered) data.
  return (
    <>
      {Object.entries(data).map(([k, value]) => {
        return (
          <div key={k} className="inline-block mx-2 mb-6">
            <div className="w-64">
              {/* {value.img.map((s) => {
                return <img key={s} src={src} />;
              })} */}
              <img src={value.img[0]} />
            </div>
            <div className="grid grid-flow-col py-4">
              <div className="col-span-6">
                <p className="font-light text-sm ">{value.name}</p>
                <p className="font-light text-sm ">Rs. {value.price}.00</p>
              </div>
              <div className="col-span-6 mx-auto">
                <button
                  id={k}
                  class="select-none rounded-lg border border-gray-900 py-2 px-3 text-center align-middle font-sans text-xs text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300"
                  type="button"
                  onClick={handleAddItem}
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

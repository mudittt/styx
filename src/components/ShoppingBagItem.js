// import data from "../data/data.json";
// import src from "../assets/1233256005/1233256005(2).webp";
import data from "../assets/data";

function ShoppingBagItems() {
  console.log(data["0685816185"].img);
  return (
    <>
      {Object.entries(data).map(([k, value]) => {
        return (
          <div key={k} className="grid grid-flow-col grid-cols-12 gap-4">
            <div className="col-span-8 flex justify-items-end items-center">
              <>
                <div className="w-28 inline-block mr-5">
                  <img src={value.img} />
                </div>
                <div className="text-left">
                  <p className="">{value.name}</p>
                  <p className="font-light text-sm">Rs. {value.price}.00</p>
                </div>
              </>
            </div>
            <div className="col-span-4 flex justify-center items-center">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
              >
                <path d="M6.229 1.229C6.105 1.352 6 1.577 6 2H5c0-.577.145-1.102.521-1.479C5.898.145 6.423 0 7 0h2c.577 0 1.102.145 1.479.521C10.855.898 11 1.423 11 2h-1c0-.423-.105-.648-.229-.771C9.648 1.105 9.423 1 9 1H7c-.423 0-.648.105-.771.229ZM1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM12 15c.423 0 .648-.105.771-.229.124-.123.229-.348.229-.771V5h1v9c0 .577-.145 1.102-.521 1.479-.377.376-.902.521-1.479.521H4c-.577 0-1.102-.145-1.479-.521C2.145 15.102 2 14.577 2 14V5h1v9c0 .423.105.648.229.771.123.124.348.229.771.229h8ZM14.5 5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1Z M6 11.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0ZM9 8.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0Z"></path>
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShoppingBagItems;

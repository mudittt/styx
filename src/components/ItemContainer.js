import { useSelector } from "react-redux"
import data from "../assets/data"
import Item from "./Item"

function ItemContainer() {

  // here we are getting our global state : CART
  // based on gender: we filter the data and send it to the Item
  const items = useSelector((store) => store.stock.items);

  return (
    <div className="col-span-9 flex flex-wrap my-1 cursor-pointer">
       <Item data={items}/>
    </div>
  )
}

export default ItemContainer
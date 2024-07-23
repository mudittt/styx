import { useSelector } from "react-redux"
import data from "../assets/data"
import Item from "./Item"

function ItemContainer() {

  const items = useSelector((store) => store.stock.items);

  return (
    <div className="col-span-9 flex flex-wrap my-1 cursor-pointer">
       <Item data={items}/>
    </div>
  )
}

export default ItemContainer
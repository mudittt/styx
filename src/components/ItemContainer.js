import data from "../assets/data"
import Item from "./Item"

function ItemContainer() {
  return (
    <div className="col-span-9 flex flex-wrap my-1 cursor-pointer">
       <Item data={data}/>
    </div>
  )
}

export default ItemContainer
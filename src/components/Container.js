import ItemContainer from "./ItemContainer"
import SideBar from "./SideBar"

function Container() {
  return (
    <div className="grid grid-flow-col gap-4 max-w-screen-lg mx-auto my-10">
        <SideBar/>
        <ItemContainer/>
    </div>
  )
}

export default Container
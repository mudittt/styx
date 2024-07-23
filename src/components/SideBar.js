import { useDispatch } from "react-redux";
import { ToggleGender } from "../utilities/stockSlice";

function SideBar() {
  
  // filter 
  // when user selects a gender, we are dispatching an action
  // all the logic of filtering out the data based on gender is done on the other side.
  const dispatch = useDispatch();
  const handleCheckboxChange = (event)=>{
    // id: male or female
    // checked: checked or unchecked 
    const {id, checked} = event.target; 
    dispatch(ToggleGender({
      id:id,
      checked:checked
    }));
    
  }

  return (
    <div className="col-span-3 mx-4 px-1">
      <div className="flex items-center mb-4">
        <input
          id="male"
          type="checkbox"
          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-gray-500 checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black"
          onChange={handleCheckboxChange}
        />
        <label
          className="text-sm font-normal cursor-pointer text-gray-600"
          htmlFor="male"
        >
          Male
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="female"
          type="checkbox"
          className="w-5 h-5 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-gray-500 checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black"
          onChange={handleCheckboxChange}
        />
        <label
          className="text-sm font-normal cursor-pointer text-gray-600"
          htmlFor="female"
        >
          Female
        </label>
      </div>
    </div>
  );

}
export default SideBar;

import { Link } from "react-router-dom";

function FavouritesPage() {
  return (
    <div className="max-w-screen-md mx-auto text-center pt-24 pb-5">
      <p className="py-5 font-medium text-4xl">Favourites</p>
      <p className="text-lg font-medium pt-4">SAVE YOUR FAVOURITE ITEMS</p>
      <p className="text-xs font-extralight">
        Want to save the items that you love?
      </p>
      <Link to={"/"}>
        <button className="bg-black w-2/6 text-white text-sm p-4 rounded-md my-4">
          Browse now
        </button>
      </Link>
    </div>
  );
}

export default FavouritesPage;

import { FaShoppingCart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729282376/eefc66cd70960daab6449206c3540858_smlknl.png"
              className="h-14"
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium mr-5 space-x-6">
          <NavLink to="/">
            <p className="text-black">Home</p>
          </NavLink>

          <div className="flex flex-col items-center">
            <GoPerson className="text-2xl bg-transparent" />
            <p className="text-black">My Profile</p>
          </div>

          <NavLink to="/cart">
            <div className="relative ">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-black"
                >
                  {cart.length}
                </span>
              )}
              <p>Cart</p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

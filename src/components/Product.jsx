import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { Link } from "react-router-dom";
import Modal from "./Model"; // Import the Modal component

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " alt={post.title} />
        <Link
          to={{
            pathname: "/ThankYou",
            state: { productName: post.title },
          }}
        >
          <button
            className="text-gray-700 border-2 border-[#144D14] rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-[#144D14]
          hover:text-white transition duration-300 ease-in min-w-full"
          >
            View Product
          </button>
        </Link>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-[#144D14] rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-[#144D14]
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-[#144D14] rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-[#144D14]
          hover:text-white transition duration-300 ease-in"
            onClick={() => setShowModal(true)} // Show the modal on click
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Modal component to display product details and confirm add to cart */}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        product={post}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Product;

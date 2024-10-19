import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const { productName } = location.state || {};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-5 text-center bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-black font-bold mb-4">Thank You!</h1>
        <p className="text-lg">
          Thank you for your interest in{" "}
          <span className="font-semibold">{productName}</span>!
        </p>
        <Link to="/">
          <button
            className="text-gray-700 border-2 border-[#144D14] rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-[#144D14]
          hover:text-white transition duration-300 ease-in min-w-full"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

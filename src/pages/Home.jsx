import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
// import dummyProducts from "../data/dummyProducts"; // Import your dummy data

const dummyProducts = [
  {
    id: 1,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333361/57a26487b27ba64aecadd2f4d7e83e50_1_vzto2m.jpg",
  },
  {
    id: 2,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333374/8150f68f85e80b39ed12017b8222dd1a_1_s7tssk.jpg",
  },
  {
    id: 3,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333375/e3d2febe446efa4b8f13ccd187d266f5_1_fvmyhg.jpg",
  },
  {
    id: 4,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333361/57a26487b27ba64aecadd2f4d7e83e50_1_vzto2m.jpg",
  },
  {
    id: 5,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333374/8150f68f85e80b39ed12017b8222dd1a_1_s7tssk.jpg",
  },
  {
    id: 6,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333375/e3d2febe446efa4b8f13ccd187d266f5_1_fvmyhg.jpg",
  },
  {
    id: 7,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333361/57a26487b27ba64aecadd2f4d7e83e50_1_vzto2m.jpg",
  },
  {
    id: 8,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333374/8150f68f85e80b39ed12017b8222dd1a_1_s7tssk.jpg",
  },
  {
    id: 9,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333375/e3d2febe446efa4b8f13ccd187d266f5_1_fvmyhg.jpg",
  },
  {
    id: 10,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333361/57a26487b27ba64aecadd2f4d7e83e50_1_vzto2m.jpg",
  },
  {
    id: 11,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333374/8150f68f85e80b39ed12017b8222dd1a_1_s7tssk.jpg",
  },
  {
    id: 12,
    title: "Monsterra",
    price: 299,
    image:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1729333375/e3d2febe446efa4b8f13ccd187d266f5_1_fvmyhg.jpg",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : dummyProducts.length > 0 ? (
        <>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {currentPosts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {[
              ...Array(Math.ceil(dummyProducts.length / postsPerPage)).keys(),
            ].map((number) => (
              <button
                key={number}
                onClick={() => paginate(number + 1)}
                className={`mx-2 px-4 py-2 rounded ${
                  currentPage === number + 1
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;

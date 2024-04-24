import { useContext } from "react";
import myContext from "../../context/data/MyContext";

function ProductCard() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {[1, 2, 3, 4].map((item) => (
            <div className="p-4 md:w-1/4 drop-shadow-lg" key={item}>
              <div
                className={`h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${
                  mode === "dark" ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className={`rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out ${
                      mode === "dark" ? "filter invert" : ""
                    }`}
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className={`tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ${
                      mode === "dark" ? "text-white" : ""
                    }`}
                  >
                    E-Bharat
                  </h2>
                  <h1
                    className={`title-font text-lg font-medium text-gray-900 mb-3 ${
                      mode === "dark" ? "text-white" : ""
                    }`}
                  >
                    This is title
                  </h1>
                  <p
                    className={`leading-relaxed mb-3 ${
                      mode === "dark" ? "text-white" : ""
                    }`}
                  >
                    ₹ 500
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className={`focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2 ${
                        mode === "dark" ? "hover:bg-pink-400" : ""
                      }`}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;

import React from "react";
import heroImage from "../../assets/hero-image.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="order-2 sm:order-1 flex flex-col justify-center items-start gap-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest
              <span className="text-primary font-cursive"> Coffee</span> in the
              city
            </h1>
            <div>
              <button
                className="bg-gradient-to-r from-primary to-secondary border-2 border-primary
               rounded-full px-4 py-2 text-white hover:scale-105 duration-200"
              >
                Coffe and code
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[400px] order-1 sm:order-2 flex justify-center items-center relative">
            <img
              src={heroImage}
              className="w-[250px] sm:w-[400px] sm:scale-110 mx-auto spin"
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-14 p-3 rounded-xl">
              <h1>Hey Coder</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-14 p-3 rounded-xl">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

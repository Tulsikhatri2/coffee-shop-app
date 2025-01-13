import React from "react";
import bannerImage from "../../assets/banner-image.png";
import bannerBackground from "../../assets/banner-background.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${bannerBackground})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex jusitfy-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {/* Image Section */}
            <div>
              <img
                src={bannerImage}
                alt=""
                className="max-w-[430px] w-full mx-auto spin drop-shadow-xl "
              />
            </div>
            {/* Text Content Section */}
            <div className="flex flex-col itmes-center justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Blend Coffee{" "}
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium molestiae cum delectus optio, eaque est veritatis
                necessitatibus aliquid blanditiis in voluptate impedit possimus,
                incidunt odit
              </p>
              <div className="grid grid-cols-2 gap-6 ">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200" />
                    <span>Hot Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div className="space-y-3 border-l-4 border-primary/50 pl-6">
                  <h1 className="text-2xl font-semibold font-cursive">
                    Tea Lover
                  </h1>
                  <p className="text-gray-500 text-sm ">
                    Much like writing the code, brewing the perfect cup of tea
                    requires patience, precision, and a dash of passion to
                    create a comforting blend of flavours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

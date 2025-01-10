import React from "react";
import image2 from "../../assets/hero-image.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: image2,
      name: "Espresso",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, itaque libero? Atque assumenda optio.",
      aosDelay: "100",
    },
    {
      id: 2,
      image: image2,
      name: "Americano",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, itaque libero? Atque assumenda optio.",
      aosDelay: "300",
    },
    {
      id: 3,
      image: image2,
      name: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, itaque libero? Atque assumenda optio.",
      aosDelay: "500",
    },
  ];
  return (
    <>
    <span id="services"></span>
    <div className="py-10">
      <div className="container">
        {/* Header title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>
        {/* Services card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {servicesData?.map((item, index) => {
            return (
              <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
              >
                <div className="h-[122px] ">
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>
                {/* Text content */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;

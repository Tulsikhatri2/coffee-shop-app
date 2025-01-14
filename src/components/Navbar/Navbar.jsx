import React from "react";
import { FaCoffee } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";

const Navbar = () => {
  const Menus = [
    { id: "1", name: "Home", link: "/#home" },
    { id: "2", name: "Services", link: "/#services" },
    { id: "3", name: "About", link: "/#about" },
  ];
  return (
    <div>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center gap-4">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="text-2xl sm:text-3xl flex items-center justify-center gap-2 tracking-widest font-cursive"
              >
                <SiCoffeescript />
                Coffee
              </a>
            </div>
            {/* Link Section */}
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menus.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block text-xl py-4 px-4 text-white/60 hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-primary/70 px-4 py-2 rounded-full flex items-center gap-3 hover:shadow-md hover:shadow-gray-800 transition-all ease-in hover:ease-out duration-2000">
                Order
                <FaCoffee className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

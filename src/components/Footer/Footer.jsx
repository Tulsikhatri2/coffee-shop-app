import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import footerBackground from "../../assets/footer-background.jpg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const bgImageStyles = {
    backgroundImage: `url(${footerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };

  return (
    <div style={bgImageStyles} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="tracking-widest text-2xl sm:text-3xl font-cursive "
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
            <a
              href="https://www.youtube.com"
              target="blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit out YouTube Channel
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            {/* First Column Links */}
            <div className="py-8 px-4 ">
              <h1 className="text-xl font-medium sm:text-left mb-3">
                Footer Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}
                    className="inline-block hover:scale-105 duration-200 " >{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Column Links */}
            <div className="py-8 px-4 ">
              <h1 className="text-xl font-medium sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}
                    className="inline-block hover:scale-105 duration-200 " >{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address Section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
              <div>
                <p className="mb-3">123, Any Street, Any Town, Any Country</p>
                <p>1234567890</p>

                {/* Social Links */}
                <div className="space-x-3 mt-6">
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200"/>
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200"/>
                  </a>
                </div>
                <p>Email: test@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

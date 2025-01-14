import React from "react";
import Slider from "react-slick";
import test1 from "../../assets/testimonial-user-1.jpg";
import test2 from "../../assets/testimonial-user-2.webp";
import test3 from "../../assets/testimonial-user-3.jpg";
import test4 from "../../assets/testimonial-user-4.jpg";
import test5 from "../../assets/testimonial-user-5.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Isha Sharma",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a labore voluptatum ipsum at, facilis corporis, minima nisi cum itaque quibusdam perspiciatis odio illum veniam tenetur necessitatibus.",
    img: test1,
  },
  {
    id: 2,
    name: "Radhika Roy",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a labore voluptatum ipsum at, facilis corporis, minima nisi cum itaque quibusdam perspiciatis odio illum veniam tenetur necessitatibus.",
    img: test2,
  },
  {
    id: 3,
    name: "Shubh Chaudhary",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a labore voluptatum ipsum at, facilis corporis, minima nisi cum itaque quibusdam perspiciatis odio illum veniam tenetur necessitatibus.",
    img: test3,
  },
  {
    id: 4,
    name: "Ritika Rathore",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a labore voluptatum ipsum at, facilis corporis, minima nisi cum itaque quibusdam perspiciatis odio illum veniam tenetur necessitatibus.",
    img: test4,
  },
  {
    id: 5,
    name: "Sahil Verma",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi a labore voluptatum ipsum at, facilis corporis, minima nisi cum itaque quibusdam perspiciatis odio illum veniam tenetur necessitatibus.",
    img: test5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* Testimonials card section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <div className="my-6" key={index}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/20 relative">
                  {/* Image Section */}
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/60 font-cursive">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

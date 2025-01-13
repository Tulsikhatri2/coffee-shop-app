import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

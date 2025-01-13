import React from "react";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
import storeBackground from "../../assets/store-background.jpg";

const backgroundStyle = {
  backgroundImage: `url(${storeBackground})`,
  backgroundRepeat: "norepeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto ">
                {/* Text Content */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3 ">
                Coffee Cafe is available for Android and IOS
              </h1>
              {/* Logo Section */}
              <div className=" flex flex-wrap justify-center sm:justify-start items-center">
                <a href="">
                    <img src={appStore} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "/>
                </a>
                <a href="">
                    <img src={googlePlay} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "/>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;

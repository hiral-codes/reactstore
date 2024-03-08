import React from "react";
import HomeSlide from "./HomeSlide";

function Home() {
  return (
    <>
      <div className="-z-10">
        <HomeSlide />
      </div>
      <div className="home-title text-center text-3xl px-4 h-screen">
        "Shop Your Vibe, Feel the Cart, Discover Your Perfect Groove with
        Vibecart"
      </div>
    </>
  );
}

export default Home;

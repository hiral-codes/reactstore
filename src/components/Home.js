import React from "react";
import HomeSlide from "./HomeSlide";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <HomeSlide />
      </div>
      <div className="home-title text-center text-4xl py-4 px-4 font-bold">
        "Shop Your Vibe, Feel the Cart, Discover Your Perfect Groove with
        Vibestore"
      </div>
      <div className="flex justify-center items-center flex-col gap-4 md:flex-row py-4">
        <Link to="/products">
          <div className="w-60 text-gray-100  hover:bg-[#6947c1] text-base text-center  py-3 rounded-sm bg-[#7F50F8]">
            Shop now
          </div>
        </Link>
        <Link to="/about">
          <div className="w-60  text-gray-100 hover:bg-[#353535] text-base text-center py-3 rounded-sm bg-[#333333]">
            Learn more
          </div>
        </Link>
      </div>
      <div className="flex item-center- justify-center py-4">
        <div className="w-[2px] h-10 bg-[#ffffff89] md:h-20"></div>
      </div>
      <div className="Explore">
        <div className="title text-center font-extrabold text-4xl">
          Why shop with us?
        </div>
        <p className="text-center py-2 px-10 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          animi at incidunt veritatis similique sunt laboriosam vitae ratione!
          Dolorum veritatis corporis non magnam sequi?
        </p>
        <div className="container p-12 mx-auto flex gap-3 md:gap-8 flex-wrap justify-center">

          <div className="card w-full border-4 border-purple-600 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl">Quality Assurance</div>
            <p>
              We source our products from trusted suppliers, ensuring that each
              item meets our rigorous quality standards. You can shop with
              confidence, knowing that you're getting the best of the best.
            </p>
          </div>
          <div className="card w-full border-4 border-purple-600 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl">Unbeatable Prices</div>
            <p>
              We believe that everyone deserves access to high-quality [Your
              Product Niche] without breaking the bank. That's why we offer
              competitive prices on all of our products, so you can get more for
              your money.
            </p>
          </div>
          <div className="card w-full border-4 border-purple-600 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl">Convenient Shopping</div>
            <p>
              Skip the crowded malls and long checkout lines. With [Your
              Ecommerce Site Name], you can shop anytime, anywhere, with just a
              few clicks. Our user-friendly website makes it easy to browse our
              selection, place orders, and track your shipments.
            </p>
          </div>
          <div className="card w-full border-4 border-purple-600 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl">Fast Shipping</div>
            <p>
              We know you're excited to receive your new [Your Product Niche],
              which is why we offer fast and reliable shipping options. With our
              expedited delivery service, you'll have your order in no time.
            </p>
          </div>
          <div className="card w-full border-4 border-purple-600 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl">
              Exceptional Customer Service
            </div>
            <p>
              Have a question or need assistance? Our dedicated customer service
              team is here to help. Whether you need help finding the right
              product or have a concern about your order, we're committed to
              providing you with the best shopping experience possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import HomeSlide from "./HomeSlide";
import { Link } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <HomeSlide/>
      </div>
      <div className="home-title text-center text-xl md:text-4xl py-4 px-4 font-semibold">
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
        <div className="title text-center font-bold text-2xl md:text-4xl">
          Why shop with us?
        </div>
        <p className="text-center py-2 px-10 mx-auto italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam
          animi at incidunt veritatis similique sunt laboriosam vitae ratione!
          Dolorum veritatis corporis non magnam sequi?
        </p>
        <div className="container p-6 mx-auto flex gap-3 md:gap-8 flex-wrap justify-center">
          <div data-aos="zoom-in" className="card w-full border-2 md:border-4 border-gray-400 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <GoCheckCircleFill className="text-2xl" />
              </div>
              Quality Assurance
            </div>
            <p className="pt-2">
              We source our products from trusted suppliers, ensuring that each
              item meets our rigorous quality standards. You can shop with
              confidence, knowing that you're getting the best of the best.
            </p>
          </div>
          <div data-aos="zoom-in" className="card w-full border-2 md:border-4 border-gray-400 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <RiMoneyDollarCircleFill className="text-2xl" />
              </div>
              Unbeatable Prices
            </div>
            <p className="pt-2">
              We believe that everyone deserves access to high-quality [Your
              Product Niche] without breaking the bank. That's why we offer
              competitive prices on all of our products, so you can get more for
              your money.
            </p>
          </div>
          <div data-aos="zoom-in" className="card w-full border-2 md:border-4 border-gray-400 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <FaBagShopping className="text-2xl" />
              </div>
              Convenient Shopping
            </div>
            <p className="pt-2">
              Skip the crowded malls and long checkout lines. With [Your
              Ecommerce Site Name], you can shop anytime, anywhere, with just a
              few clicks. Our user-friendly website makes it easy to browse our
              selection, place orders, and track your shipments.
            </p>
          </div>
          <div data-aos="zoom-in" className="card w-full border-2 md:border-4 border-gray-400 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <FaShippingFast className="text-2xl" />
              </div>
              Fast Shipping
            </div>
            <p className="pt-2">
              We know you're excited to receive your new [Your Product Niche],
              which is why we offer fast and reliable shipping options. With our
              expedited delivery service, you'll have your order in no time.
            </p>
          </div>
          <div data-aos="flip-left" className="card w-full border-2 md:border-4 border-gray-400 bg-[#151515] rounded p-4 md:w-1/3">
            <div className="title font-bold text-xl flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 bg-indigo-900">
                <RiCustomerService2Fill className="text-2xl" />
              </div>
              Exceptional Customer Service
            </div>
            <p className="pt-2">
              Have a question or need assistance? Our dedicated customer service
              team is here to help. Whether you need help finding the up
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

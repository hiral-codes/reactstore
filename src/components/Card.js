import React from "react";

function Card({image,category,price,title}) {
  return (
    <>
      <div className="container h-auto w-[150px] rounded bg-[#1a1a1a] p-3 md:w-[300px]">
        <div className="image h-20 bg-white rounded overflow-hidden p-1 md:h-40">
            <img src={image} alt="product" className="w-full h-full object-contain object-center"/>
        </div>
        <div className="category">
          <span className="cat p-1 opacity-20 rounded-2xl text-xs bg-black capitalize">
            {category}
          </span>
        </div>
        <h1 className="font-semibold ">{title}</h1>
        <p>${price}</p>
        <div className="buttons pt-2">
          <button className="w-full text-center py-1 text-sm bg-[#1e1e1e] rounded text-[#ffffffbc]">
            Buy Now
          </button>
          <button className="w-full text-center py-1 text-sm bg-[#2b175c] rounded text-[#ffffffbc] mt-2">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

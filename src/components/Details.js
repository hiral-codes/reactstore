import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiCancel } from "react-icons/gi";

import { Link } from "react-router-dom";
function Details() {
  const { productId } = useParams(); // Accessing the productId param from the route
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(true);
      });
  }, [productId]);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-[80%] mx-auto flex items-center justify-center">
          <div className="w-full md:w-1/2 mt-4 bg-[#1e1e1e] p-8 rounded-2xl relative">
            <Link to="/products">
              <div className="absolute top-1 right-1 text-3xl text-gray-600"><GiCancel/></div>
            </Link>
            <div className="image w-full h-60 md:h-80 bg-white rounded-xl">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="category py-2">
              <span className="cat px-2 py-1 opacity-60 rounded-2xl text-xs bg-black capitalize md:text-sm">
                {product.category}
              </span>
            </div>
            <p className="py-2 text-xl">{product.title}</p>
            <p className="py-2 text-xl">${product.price}</p>
            <p className="py-2 text-sm">{product.description}</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <p className="py-2 text-sm">
                  <span className="font-bold text-green-600">Rating : </span>
                  {product.rating.rate}
                </p>
                <p className="py-2 text-sm">
                  <span className="font-bold text-green-600">Reviews : </span>
                  {product.rating.count}
                </p>
              </div>
              <div>
                <div className="buttons pt-2">
                  <Link to="/">
                    <button className="w-full text-center py-1 uppercase text-sm bg-[#2734c7d7] rounded">
                      Buy Now
                    </button>
                  </Link>
                  <button className="w-full text-center py-1 uppercase text-sm bg-[#5c55557d] rounded mt-2">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;

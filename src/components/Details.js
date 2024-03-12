import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSlider from "./ProductSlider";
function Details() {
  const { productId } = useParams(); // Accessing the productId param from the route
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
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
        <div className="flex items-center justify-center h-screen w-full">
          Loading...
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <ProductSlider images={product.images}/>
        </div>
      )}
    </>
  );
}

export default Details;

import React from "react";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to truncate title to a suitable length
  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-wrap gap-4 py-4 px-4 justify-center md:px-10">
      
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>
        <Card
          key={product.id} // Adding a unique key for each card
          image={product.image}
          category={product.category}
          title={truncateTitle(product.title, 20)} // Truncate title to 20 characters
          price={product.price}
        />
        </Link>
      ))}
    </div>
  );
}

export default Products;

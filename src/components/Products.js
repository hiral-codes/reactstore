import React from 'react'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div className='w-full'>
      {/* Search Product */}
      <div className="search flex items-center p-5 md:p-14">
        <input type="search" className='bg-[#1a1a1a] px-2 md:p-4 md:w-80 py-1 outline-none ring-1 rounded-sm' placeholder='Search for products'/>
      </div>
      {/* Products & Categories */}
      <div className="flex-col-reverse flex md:flex-row">
        {/* All Products */}
        <div className='Products flex-1'></div>
        <div className="pl-5"><div className="categories p-5 ring-1 w-fit">
          <h1>Categories :</h1>
          <ul>
            <li><Link to="/products/all">All</Link></li>
            <li><Link to="/products/clothes">Clothes</Link></li>
            <li><Link to="/products/jwallery">Electronics</Link></li>
            <li><Link to="/products/men">Men</Link></li>
            <li><Link to="/products/women">Women</Link></li>
          </ul>
        </div></div>
      </div>
    </div>
  )
}

export default Products
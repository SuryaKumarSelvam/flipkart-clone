import React from 'react';
import './Products.css';
import { ProductsData } from '../../ProductsData';
import { Link } from 'react-router-dom';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
const Products = () => {
  return (
    <div className='products'>
      <div className='products-filter'>
        <p className='filter-head'>Filters</p>
        <div className='category'>
          <p className='filter-categoryHead'>Categories</p>
          <div className='filter-category'>Mobiles</div>
        </div>
        <div className='price'> 
          <p className='priceHead'>Price</p>
          <input type='range' name='' id='' className='priceRange'/>
          <div className='price-input'>
            <input value={200} type='' className='priceBox'/><p>to</p>
            <input value={50000} type='' className='priceBox'/>
          </div>
        </div>
        <div className='brand'>
        <p>Brand</p>
        </div>
      </div>
      <div className='products-item'>
      <p className='totalResults'>Showing 1-{ProductsData.length} of {ProductsData.length} results</p> 
      <div className='sortby'>
      <p>Sort By</p>
      <ul className='sortItems'>
        <li className='sortItem'>Relevance</li>
        <li className='sortItem'>Popularity</li>
        <li className='sortItem'>Price - Low to High</li>
        <li className='sortItem'>Price - High to Low</li>
        <li className='sortItem'>Newest First</li>
      </ul>
      </div>
    <div>
      {
        ProductsData.map((item,index)=>(
          <Link  key={index} to={`/productdetails/${item.id}`}>
            <ProductDetailCard data={item}/>
          </Link>
        ))
      }
    </div>
    </div>
      </div>
  )
}

export default Products
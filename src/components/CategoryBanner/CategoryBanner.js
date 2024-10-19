import React from 'react';
import './CategoryBanner.css'

const CategoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className='categoryBanner'>
       <img src={ImgSrc} className='categoryBanner-img'/>
       <p className='categoryBanner-title'>
        {Title.length < 25 ? Title : Title.slice(0,25)+"..."}
        </p> 
        <p className='categoryBanner-shopNow'>Shop Now</p>
        <p className='categoryBanner-brands'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner
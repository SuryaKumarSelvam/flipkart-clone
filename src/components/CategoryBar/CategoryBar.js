import React from 'react';
import './CategoryBar.css';

const CategoryBar = ({Imgsrc,CategoryName}) => {
  return (
    <div className='category-bar'>
        <div className='category-bar-img'>
            <img src={Imgsrc} alt='Category Image'/>
        </div>
        <p className='category-bar-name'>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar
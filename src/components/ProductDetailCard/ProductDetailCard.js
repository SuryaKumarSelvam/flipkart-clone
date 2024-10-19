import React from 'react';
import './ProductDetailCard.css';

const ProductDetailCard = ({data}) => {
  return (
    <div className='productDetailCard'>
        <div className='productDetail-Img'>
            <img src={data.url}/>
        </div>
        <div className='productDetailCard-details'>
                <p className='productDetailCard-name'>{data.Product}</p>
                <div className='ratingsAndReviews'>
                    <div className='stars'>{data.rating} *</div>
                    <p className='ratings'>
                        {data.rating} Rating & {data.reviews} Reviews
                    </p>
                </div>
                    <ul className='productDetailCard-productDetails'>
                        <li className='productDetailCard-productDetail'>{data.Description}</li>
                        <li className='productDetailCard-productDetail'>{data.Display}</li>
                        <li className='productDetailCard-productDetail'>{data.Camera}</li>
                        <li className='productDetailCard-productDetail'>{data.Proccessor}</li>
                    </ul>
                </div>
                <div className='productDetailCard-priceAndDelivery'>
                   <div className='priceContainer'>
                    <p className='productDetailCard-price'>
                        ₹{data.Sellingprice}
                    </p>
                    <img 
                     src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'
                     height={21}
                     alt=''
                     />
                    </div> 
                     <p className='freeDel'>Free Delivery</p>
                     <p className="discount">
                         Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
                     </p>
                </div>
        </div>
  )
}

export default ProductDetailCard
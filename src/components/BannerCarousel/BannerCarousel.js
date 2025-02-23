import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerCarousel.css';

const BannerCarousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  };

  return (
    <div className='bannerCarousel'>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.Imgsrc} alt={item.alt || 'Banner image'} className='BannerCarousel-image' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;

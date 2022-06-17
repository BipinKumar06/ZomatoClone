import React from 'react'
import Slider from 'react-slick'
import nextArrow from '../../common/carousel/nextArrow'
import prevArrow from '../../common/carousel/prevArrow'
import './topBrands.css'

const topBrandList=[   
    {
        id:1,
        title:"McDonald's",
        time:"36 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id:2,
        title:"EatFit",
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cdb092ffa9529b3c6806f42b4c0ef590_1608180972.png?output-format=webp"       
    },
    {
        id:3,
        title:"A2B veg",
        time:"24 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp"      
    },
    {
        id:4,
        title:"Burger King",
        time:"49 min",
cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"      
    },
    {
        id:5,
        title:"Subway",
        time:"28 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502580.png?output-format=webp"      
    },
    {
        id:6,
        title:"Pizza Hut",
        time:"43 min",
  cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"       
    },
    {
        id:7,
        title:"Chai Point",
        time:"32 min",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/e233fa61fd1dfc0147109bd4eb0bd315_1513746862.png?output-format=webp"  
    },
    {
        id:8,
        title:"Chaayos Chai+Snacks=Relax",
        time:"31 min",
 cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png?output-format=webp"      
    },

]

const setting={
   
    infinite:false,
    slidesToShow:6,
    slidesToScroll:1,
    nextArrow: <nextArrow />  ,
    prevArrow:<prevArrow />
}

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top Brands for You</div>
            <Slider {...setting}>
                {topBrandList.map((brand)=>{
  return (
      <div>
      <div className="top-brands-cover">
          <img 
          src={brand.cover}
          className="top-brands-image" alt={brand.title}
          / >
      <div>{brand.title}</div>
      </div>
      </div>
  );
                })}
            </Slider>
        </div>
    )
}

export default TopBrands

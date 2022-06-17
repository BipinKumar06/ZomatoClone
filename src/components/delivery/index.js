import React from 'react'
import "./delivery.css"
import {restaurants} from '../../data/restaurants'
import Filters from '../common/filters'
import {MdOutlineFilterList} from "react-icons/md"
import {BsArrowDownUp} from "react-icons/bs"
import DeliveryCollections from "./deliverycollections"
import TopBrands from './topBrands'
import ExploreSection from '../common/ExploreSection'
const deliveryFilters=[{
    id:1,
    icon:<MdOutlineFilterList className="absolute-center"/>,
    title:'Filters',
},
{
    id:2,
    title:'Rating: 4.0+',
},
{
    id:3,
    title:'Safe and Hygienic',
},
{
    id:4,
    title:'Pure veg',
},
{
    id:5,
    icon:<BsArrowDownUp className="absolute-center"/>,
    title:"Delivery Time",
},
{
    id:5,
    title:'Great Offers',
},
]
const restaurantList=restaurants;
const Delivery = () => {
    return (
        <div>
         <div className="max-width">
            <Filters filterList={deliveryFilters}/>
             </div>   
             <DeliveryCollections />
             <TopBrands />
             <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Banglore'/>

        </div>
    )
}

export default Delivery

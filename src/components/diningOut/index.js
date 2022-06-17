import React from 'react'
import Collection from '../common/collection'
import './diningOut.css'
import {diningOut} from "../../data/diningout"
import {MdOutlineFilterList} from'react-icons/md'
import Filters from '../common/filters'
import ExploreSection from '../common/ExploreSection'

const collectionList=[
    {
        id:1,
        title:"Best Pizza Places In Town",
        cover:"https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg?output-format=webp",
        places:"28 Places",

    },
    {
        id:2,
        title:"Microbreweries",
        cover:"https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg?output-format=webp",
        places:"30 Places",
    },
    {
        id:3,
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png?output-format=webp",
        places:"30 Places",
    },
    {
       id:4,
       title:"Darshini",
       cover:"https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg?output-format=webp",
       places:"29 Places",
    },
    {
     id:5,
     title:"Brilliant Biryanis",
     cover:"https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg?output-format=webp",
     places:"28 Places",
    }
]
const diningFilters=[{
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
    title:'Outdoor Seating',
},
{
    id:4,
    title:'Serve Alcohol',
},
{
    id:5,
    title:"Open Now",
},
{
    id:5,
    title:'Great Offers',
},
]
const diningList=diningOut;
const DiningOut = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={diningFilters} />
            </div>
            <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Lavelle Road" />
        </div>
    )
}

export default DiningOut

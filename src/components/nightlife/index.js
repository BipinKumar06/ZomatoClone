import React from 'react'
import "./nightlife.css"
import {BsArrowDownUp} from 'react-icons/bs'
import Collection from '../common/collection'
import Filters from '../common/filters'
import {MdOutlineFilterList} from 'react-icons/md'  
import ExploreSection from '../common/ExploreSection'
import {nightLife} from '../../data/nightLife'

const collectionList=[
    {
        id:1,
        title:"Microbreweries",
        cover:"https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg?output-format=webp",
        places:"30 Places",
    },
    
    {
        id:2,
        title:"Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
        places:"29 Places",

    },
]
const nightFilters=[{
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
    icon:<BsArrowDownUp className="absolute-center"/>,
    title:'Distance',
},
{
    id:4,
    title:'Pubs & Bars',
},
]
const nightList=nightLife;
const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={nightFilters} />
            </div>
            <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Lavelle Road" />
        </div>
    )
}

export default Nightlife

import React from 'react'
import './filters.css'
import FilterItem from "./filteritem/index"
const Filters = ({filterList}) => {
    return (
        <div className="filters">
          {filterList && filterList.map((filter)=>{
return <FilterItem filter={filter} key={filter.id}></FilterItem>
          })}
        </div>
    )
}

export default Filters;

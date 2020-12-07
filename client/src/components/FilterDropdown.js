import React from 'react'
import FilterOption from './FilterOption'

function FilterDropdown(props) {
  const options = ['All Launches', 'Failed Launches', 'Successful Launches']

  let option = options.map((item, i) => {
    return <FilterOption key={i} option={item}/>
  })

  return (
    <select onChange={props.change}>
      {option}
    </select>
  )
}

export default FilterDropdown

import React, {Fragment} from 'react'
import styles from './FilterRow.module.scss'
import FilterDropdown from './FilterDropdown'

function FilterRow(props) {
  const options = {
    launches: ['All Launches', 'Failed Launches', 'Successful Launches'],
    rockets: ['Falcon 1', 'Falcon 9', 'Falcon Heavy']
  }

  return (
    <div className={`${props.bootClass} ${styles.FilterRow}`}>
      <div className="col-12 col-md-6">
        <FilterDropdown
          data={options.launches}
          labelFor="launch-filter"
          labelText="Filter By Launch"
          change={props.change}/>
      </div>
      <div className="col-12 col-md-6">
        <FilterDropdown
          data={options.rockets}
          labelFor="rocket-filter"
          labelText="Filter By Rocket"
          change={props.change}/>
      </div>

    </div>
  )
}

export default FilterRow

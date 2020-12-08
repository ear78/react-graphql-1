import React, {Fragment} from 'react'
import styles from './FilterRow.module.scss'
import FilterDropdown from './FilterDropdown'

function FilterRow(props) {
  return (
    <div className={`${props.bootClass} ${styles.FilterRow}`}>
      <FilterDropdown
        labelFor="launch-filter"
        labelText="Launch Filter"
        change={props.change}/>
    </div>
  )
}

export default FilterRow

import React, {Fragment} from 'react'
import styles from './FilterRow.module.scss'
import FilterDropdown from './FilterDropdown'

function FilterRow(props) {
  return (
    <div className={styles.FilterRow}>
      <FilterDropdown change={props.change}/>
    </div>
  )
}

export default FilterRow

import React, { Fragment } from 'react'
import styles from './FilterDropdown.module.scss'
import FilterOption from './FilterOption'


function FilterDropdown(props) {
  const options = ['All Launches', 'Failed Launches', 'Successful Launches']

  let option = options.map((item, i) => {
    return <FilterOption key={i} option={item}/>
  })

  return (
    <Fragment>
      <label className={styles.Label} htmlFor={props.labelFor}>{props.labelText}</label>
      <select
        id={props.labelFor}
        className={styles.FilterDropdown}
        onChange={props.change}>
        {option}
      </select>
    </Fragment>

  )
}

export default FilterDropdown

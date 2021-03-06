import React, { Fragment } from 'react'
import styles from './FilterDropdown.module.scss'
import FilterOption from './FilterOption'


function FilterDropdown(props) {

  let option = props.data.map((item, i) => {
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

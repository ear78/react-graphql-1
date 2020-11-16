import React from 'react'
import PropTypes from 'prop-types'
import styles from './DataLoading.module.scss'

const DataLoading = (props) => {
  return (
    <div className={styles.DataLoading}>
      <div className={styles.SkFold}>
        <div className={`${styles.SkFoldCube}`}></div>
        <div className={`${styles.SkFoldCube}`}></div>
        <div className={`${styles.SkFoldCube}`}></div>
        <div className={`${styles.SkFoldCube}`}></div>
      </div>
    </div>
  )
}

export default DataLoading

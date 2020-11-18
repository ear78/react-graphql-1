import React from 'react'
import PropTypes from 'prop-types'
import styles from './SmallLoader.module.scss'

const SmallLoader = (props) => {
  return (
    <div className={styles.SkFold}>
      <div className={`${styles.SkFoldCube}`}></div>
      <div className={`${styles.SkFoldCube}`}></div>
      <div className={`${styles.SkFoldCube}`}></div>
      <div className={`${styles.SkFoldCube}`}></div>
    </div>
  )
}

export default SmallLoader

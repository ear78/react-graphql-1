import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
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

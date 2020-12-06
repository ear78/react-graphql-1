import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './Spinner.module.scss'

const Spinner = (props) => {
  let smallSpinner = props.small ? styles.Small : ''
  
  return (
      <div
      className={`${styles.SpinnerBg} ${smallSpinner}`}>
        <div className={styles.Circle}></div>
      </div>
  )
}

export default Spinner

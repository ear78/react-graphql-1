import React from 'react'
import styles from './LaunchModal.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

const LaunchModal = ({setModal, selectedLaunch: { flight_number, mission_name }}) => {
  return (
    <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ''}`}>
      <div className={`card card-body ${styles.InnerCard}`}>
        <FontAwesomeIcon icon={faTimesCircle} />
        <p>{flight_number}</p>
        <p>{mission_name}</p>
      </div>
    </div>
  )
}

export default LaunchModal

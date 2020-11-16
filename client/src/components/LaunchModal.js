import React from 'react'
import styles from './LaunchModal.module.scss'
import PropTypes from 'prop-types'
import ModalContent from './ModalContent'

const LaunchModal = ({click, setModal, selectedLaunch}) => {

  return (
    <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ''}`}>
      <ModalContent click={click} selectedLaunch={selectedLaunch}/>
    </div>
  )
}

export default LaunchModal

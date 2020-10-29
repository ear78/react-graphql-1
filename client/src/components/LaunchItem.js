import React from 'react'
import PropTypes from 'prop-types'
import styles from './LaunchItem.module.scss'
import Moment from 'react-moment'

const LaunchItem = ({ data:{ flight_number, mission_name, launch_date_local, launch_success, links: { mission_patch } }}) => {
  return (
    <div key={flight_number} className={`card card-body mb-3 ${styles.LaunchItem}`}>
      <div className="row">
        <div className="col-md-9">
          <img src={mission_patch}/>
          <h5>Mission Name: <span>{mission_name}</span></h5>
          <p className={styles.ItemTitle}>Flight: <span>#{flight_number}</span></p>
          <p className={styles.ItemTitle}>Launch Date: <span><Moment format={"YYYY/MM/DD"}>{launch_date_local}</Moment></span></p>
          <p className={`${styles.ItemTitle} ${launch_success ? styles.success : styles.failed}`}>Launched: <span>{launch_success ? 'Successful' : 'Failed'}</span></p>
        </div>
        <div className="col-md-3 text-right">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>

    </div>
  )
}

export default LaunchItem

import React from 'react'
import PropTypes from 'prop-types'

const LaunchItem = ({ data: { flight_number, mission_name, launch_date_local, launch_success }}) => {
  return (
    <div key={flight_number} className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission Name: {mission_name}</h4>
          <p>Flight #: {flight_number}</p>
          <p>Launch Date: {launch_date_local}</p>
          <p>Launched: {launch_success ? 'Successful' : 'Failed'}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>

    </div>
  )
}

export default LaunchItem

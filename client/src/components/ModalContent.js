import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'
import styles from './ModalContent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
      launch_site {
        site_name_long
      }
      rocket {
        rocket_type
        rocket_name
      }
      links {
        mission_patch
      }
    }
  }
`

const ModalContent = ({ click, selectedLaunch }) => {
  const flight_number = selectedLaunch
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={`card card-body ${styles.InnerCard}`}>
      <FontAwesomeIcon onClick={click} icon={faTimesCircle} />
      <p>{data.launch.flight_number}</p>
      <p>{data.launch.mission_name} - {data.launch.rocket.rocket_name} - {data.launch.rocket.rocket_type}</p>
      <p>{data.launch.details}</p>
      <p>{data.launch.launch_site.site_name_long}</p>
      <p>{data.launch.launch_success ? 'Success' : 'Failed'} - {data.launch.launch_date_local}</p>
      <p>{data.launch.links.mission_patch}</p>
    </div>
  )
}

export default ModalContent

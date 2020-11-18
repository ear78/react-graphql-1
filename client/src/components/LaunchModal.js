import React from 'react'
import styles from './LaunchModal.module.scss'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import Moment from 'react-moment'
import SmallLoader from './SmallLoader'

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

const LaunchModal = ({click, setModal, selectedLaunch}) => {

  const flight_number = selectedLaunch
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (error) return <p>Error :(</p>;
  if (loading) {
    return (
      <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ''}`}>
        <div className={`card card-body ${styles.InnerCard} ${styles.Loading}`}>
          <SmallLoader/>
        </div>
      </div>
      )
  } else {
    return (
      <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ''}`}>
        <div className={`card card-body ${styles.InnerCard}`}>
          <FontAwesomeIcon className={styles.Svg} onClick={click} icon={faTimesCircle} />
          <div className={styles.TopContainer}>
            <img
              className={styles.ImagePatch}
              src={data.launch.links.mission_patch}
              alt={`${data.launch.rocket.rocket_name} ${data.launch.mission_name}`}/>

            <p className={styles.TopDetails}>
              <h3 className={styles.Title}>Flight: #{data.launch.flight_number}</h3>
              <p>
                <span className={styles.DetailsTitle}>Mission Name:</span> {data.launch.mission_name}
              </p>
              <p><span className={styles.DetailsTitle}>Rocket Name:</span> {data.launch.rocket.rocket_name}</p>
              <p><span className={styles.DetailsTitle}>Rocket Type:</span> {data.launch.rocket.rocket_type}</p>
            </p>
          </div>

          <div className={styles.BottomContainer}>
            <h3>Launch Details</h3>
            <p className={styles.Details}>
              <p className={styles.DetailsTitle}>Details</p>
              - {data.launch.details}
            </p>
            <p className={styles.Details}>
              <p className={styles.DetailsTitle}>Site Launch Location</p>
              - {data.launch.launch_site.site_name_long}
            </p>
            <p className={styles.Details}>
              <p className={styles.DetailsTitle}>Launch Status</p>
              - {data.launch.launch_success ? 'Success' : 'Failed'}
              <span className={`${data.launch.launch_success ? styles.success : styles.failed}`}></span>
            </p>
            <p className={styles.Details}>
              <p className={styles.DetailsTitle}>Launch Date</p>
              - <Moment format={"YYYY/MM/DD"}>{data.launch.launch_date_local}</Moment>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LaunchModal

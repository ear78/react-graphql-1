import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Launches.module.scss'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'
import LaunchModal from './LaunchModal'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      links {
        mission_patch
      }
    }
  }
`

const Launches = (props) => {

  const [{currentLaunch, isModalActive}, setCurrentLaunch] = useState(
    {
      currentLaunch: {},
      isModalActive: false
    }
  );

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    let launch = data.launches.map(launch => {
      // console.log('launch', launch);
      return <LaunchItem click={() => setCurrentLaunch({currentLaunch: launch, isModalActive: true})} key={launch.flight_number} data={launch}/>
    })

  return (
    <div className={styles.Launches}>
      { launch }
      <LaunchModal setModal={isModalActive} selectedLaunch={currentLaunch}/>
    </div>
  )
}

export default Launches

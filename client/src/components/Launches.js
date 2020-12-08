import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Launches.module.scss'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'
import LaunchModal from './LaunchModal'
import Spinner from './Spinner'
import FilterRow from './FilterRow'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
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

const Launches = (props) => {

  const [{currentLaunch, isModalActive}, setCurrentLaunch] = useState(
    {
      currentLaunch: null,
      isModalActive: false
    }
  );

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

    let arrLength = data.launches.length - 1
    let spliced = data.launches.slice()
    spliced.pop()

    let filterData = spliced.filter(launch => {
      let filtered
      if(props.filter === 'All Launches') {
        filtered = launch
      }
      if(props.filter === 'Successful Launches') {
        if(launch.launch_success === true) {
          filtered = launch
        }
      }
      if(props.filter === 'Failed Launches') {
        if(launch.launch_success === false || launch.launch_success === null) {
          filtered = launch
        }
      }
      return filtered
    })

    let launch = filterData.map((launch, i) => {
      return <LaunchItem click={() => setCurrentLaunch({currentLaunch: launch.flight_number, isModalActive: true})} key={i} data={launch}/>
    })

    let launchModal
    if(isModalActive) {
      launchModal = <LaunchModal
        click={() => setCurrentLaunch({isModalActive: false})}
        setModal={isModalActive}
        selectedLaunch={currentLaunch}/>
    } else {
      launchModal = null
    }

  return (
    <div className={styles.Launches}>
      { launch }
      { launchModal }
    </div>
  )
}

export default Launches

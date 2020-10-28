import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = (props) => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    let launch = data.launches.map(launch => {
      return <LaunchItem key={launch.flight_number} data={launch}/>
    })

  return (
    <div>
      <h2>Launches</h2>
      { launch }
    </div>
  )
}

export default Launches

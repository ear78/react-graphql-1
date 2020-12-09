const filtering = (appData, filterType) => {
  console.log('filtering', appData, filterType);
  let arrLength = appData.length - 1
  let spliced = appData.slice()
  spliced.pop()

  let filterData = spliced.filter(launch => {
    let filtered
    if(filterType === 'All Launches') {
      filtered = launch
    }
    if(filterType === 'Successful Launches') {
      if(launch.launch_success === true) {
        filtered = launch
      }
    }
    if(filterType === 'Failed Launches') {
      if(launch.launch_success === false || launch.launch_success === null) {
        filtered = launch
      }
    }
    return filtered
  })
  return filterData
}

export default filtering

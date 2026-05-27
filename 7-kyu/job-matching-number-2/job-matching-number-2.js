// input: and array with objects with key value pairs
// output: is the canidate that matches the job
​
// method: filtering
​
// Approach: 
//   I will filter ther canidates to keep the ones that match the job description
//     Equity : false or true (if job offers equity)
//     location: current or desired location matches job location
​
function match(job, candidates) {
  return candidates.filter(candidate => {
​
    // Equity check
    const equityMatch =
      !candidate.desiresEquity || job.equityMax > 0
​
    // Location check
    const locationMatch =
      job.locations.includes(candidate.currentLocation) ||
​
      candidate.desiredLocations.some(location =>
        job.locations.includes(location)
      )
​
    // Must pass both checks
    return equityMatch && locationMatch
  })
}
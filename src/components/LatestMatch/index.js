import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const updatedLatestMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedLatestMatchDetails

  return (
    <div className="latest-match-card-container">
      <div className="latest-match-card-top-section">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <div className="latest-match-card-bottom-section">
        <p className="first-inning">First Innings</p>
        <p className="first-inning-name">{firstInnings}</p>
        <p className="second-inning">Second Innings</p>
        <p className="second-inning-name">{secondInnings}</p>
        <p className="man-of-the-match">Man Of The Match</p>
        <p className="man-of-the-match-name">{manOfTheMatch}</p>
        <p className="umpire">Umpire</p>
        <p className="umpire-name">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch

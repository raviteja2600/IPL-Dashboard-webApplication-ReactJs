import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  const updatedRecentMatches = {
    competingTeam: recentMatches.competing_team,
    competingTeamLogo: recentMatches.competing_team_logo,
    date: recentMatches.date,
    firstInnings: recentMatches.first_innings,
    id: recentMatches.id,
    manOfTheMatch: recentMatches.man_of_the_match,
    matchStatus: recentMatches.match_status,
    result: recentMatches.result,
    secondInnings: recentMatches.second_innings,
    umpires: recentMatches.umpires,
    venue: recentMatches.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = updatedRecentMatches

  const matchResultClassName = matchStatus === 'Lost' ? 'match-lost' : ''

  return (
    <li className="recent-match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-card-item-logo"
      />
      <p className="recent-match-competing-team">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`recent-match-status ${matchResultClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard

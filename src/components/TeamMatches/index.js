import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: {},
    teamMatchesId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = await this.props
    const {params} = match
    const {id} = params

    this.setState({
      teamMatchesId: id,
    })

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updateMatchDetails = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      bannerUrl: data.team_banner_url,
    }

    this.setState({
      matchDetails: updateMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {teamMatchesId, isLoading, matchDetails} = this.state
    const {latestMatchDetails, recentMatches, bannerUrl} = matchDetails
    const backgroundColor = `background-color-${teamMatchesId}`

    return (
      <div className={`team-matches-bg-container ${backgroundColor}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              className="team-matches-image"
              src={bannerUrl}
              alt="team banner"
            />
            <div>
              <p className="latest-matches">Latches Matches</p>

              <LatestMatch latestMatchDetails={latestMatchDetails} />

              <ul className="recent-matches-list-items">
                {recentMatches.map(eachCardDetails => (
                  <MatchCard
                    key={eachCardDetails.id}
                    recentMatches={eachCardDetails}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches

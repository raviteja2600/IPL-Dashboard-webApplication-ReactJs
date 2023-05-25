import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamCardsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="background-image">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-cards-container">
              {teamCardsList.map(eachCard => (
                <TeamCard key={eachCard.id} eachCard={eachCard} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home

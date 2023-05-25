import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachCard} = props
  const {id, name, teamImageUrl} = eachCard

  return (
    <Link to={`/team-matches/${id}`} className="link-team-card-item">
      <li className="team-card-container">
        <div className="team-card-details">
          <img src={teamImageUrl} alt={name} className="team-card-image" />
          <p className="team-card-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard

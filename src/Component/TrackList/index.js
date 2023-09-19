import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackList = props => {
  const {details, deletePlaylist} = props
  const {id, imageUrl, name, genre, duration} = details

  const onDelete = () => {
    deletePlaylist(id)
  }
  return (
    <li>
      <div className="listContainer">
        <div className="listLeftSide">
          <div>
            <img src={imageUrl} alt="track" />
          </div>
          <div>
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>
        <div className="listRightSide">
          <p>{duration}</p>
          <button type="button" data-testid="delete" onClick={onDelete}>
            <AiOutlineDelete className="icon" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default TrackList

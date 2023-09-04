// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachItem} = props
  return (
    <Popup
      modal
      trigger={
        <img
          src={eachItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
        />
      }
      className="popup-content"
    >
      {close => (
        <div className="popup">
          <button
            type="button"
            className="close"
            onClick={close}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <div className="video">
            <ReactPlayer url={eachItem.videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem

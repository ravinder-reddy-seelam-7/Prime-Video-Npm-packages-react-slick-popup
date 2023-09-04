// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="top-image"
      />
      <h2 className="bg-heading-type"> Action Movies </h2>
      <div className="slide-container">
        <MovieSlider moviesList={actionMoviesList} />
      </div>
      <h2 className="bg-heading-type"> Comedy Movies </h2>
      <div className="slide-container">
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo

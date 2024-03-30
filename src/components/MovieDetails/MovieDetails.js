import "./MovieDetails.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails({handleError}) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  function selectMovie(movId) {
    const movie = fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movId}`
    )
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to get movie')
        }
          return response.json()
      })
      .then((data) => {
        setMovie(data.movie)
      })
      .catch((error) => {
        handleError(error.message)
      })
  }

  useEffect(() => {
    selectMovie(id)
  }, [id])

  return (
    <div className="modal">
      {movie && (
        <div className="modal-content">
          <Link to={`/`}>
            <button className="close-details" tabindex='0'>Close</button>
          </Link>
          <img src={movie.backdrop_path} alt={`Backdrop for ${movie.title}`}></img>
          <h3>{movie.title}</h3>
          <h4>"{movie.tagline}"</h4>
          <div className="movie-details">
            <p className="overview">{movie.overview}</p>
            <div className="details--stats">
              <p>
                <span>Release Date: </span>
                {movie.release_date}
              </p>
              <p>
                <span>Genres: </span>
                {movie.genres.toString().replaceAll(",", ", ")}
              </p>
              <p>
                <span>Budget: </span>${movie.budget}
              </p>
              <p>
                <span>Runtime: </span>
                {movie.runtime} mins
              </p>
              <p>
                <span>Rating: </span>
                {movie.average_rating}
              </p>
              <p>
                <span>Revenue: </span>${movie.revenue}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


MovieDetails.propTypes = {
  handleError: PropTypes.func.isRequired
}

export default MovieDetails;

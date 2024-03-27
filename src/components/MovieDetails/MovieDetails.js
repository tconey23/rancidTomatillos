import './MovieDetails.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails () {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    // const selectMovie = async (movId) => {
    //     const movie = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movId}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.movie);
    //             setMovie(data.movie)
    //         })
    //         .catch(error => {
    //             console.error('Error fetching movie:', error);
    //         });
    // }

    function selectMovie(movId) {
        const movie = fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movId}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data.movie)
            })
            .catch(error => {
                console.error('Error fetching movie:', error);
            });
    }

    useEffect(() => { 
        selectMovie(id)
      }, [id]) 

    return (
            <div className="modal">
                {movie && (    
                <div className="modal-content">
                    <Link to={`/`}>
                        <div className="close-details">Close</div>
                    </Link>
                    <img src={movie.backdrop_path} alt="Backdrop"></img>
                    <h2>{movie.title}</h2>
                    <h3>"{movie.tagline}"</h3>
                    <div className="movie-details">
                        <p className="overview">{movie.overview}</p>
                        <div className="details--stats">
                            <p><span>Release Date: </span>{movie.release_date}</p>
                            <p><span>Genres: </span>{movie.genres.toString().replaceAll(',', ', ')}</p>
                            <p><span>Budget: </span>${movie.budget}</p>
                            <p><span>Runtime: </span>{movie.runtime} mins</p>
                            <p><span>Rating: </span>{movie.average_rating}</p>
                            <p><span>Revenue: </span>${movie.revenue}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
    );
}

// MovieDetails.propTypes = {
//     selectedMovie: PropTypes.shape({
//         title: PropTypes.string,
//         poster_path: PropTypes.string,
//         backdrop_path: PropTypes.string,
//         release_date: PropTypes.string,
//         overview: PropTypes.string,
//         genres: PropTypes.array,
//         budget: PropTypes.number,
//         revenue: PropTypes.number,
//         runtime: PropTypes.number,
//         tagline: PropTypes.string,
//         average_rating: PropTypes.number
//     })
// }

// note: you have to wrap selectedMovie around all of the properties 
// because it is an object. It wont work without the PropTypes.shape()


export default MovieDetails
import './MovieDetails.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails (/*{ selectedMovie, hideDetails }*/) {
    
    const id = useParams().id
    const [selectedMovie, setSelectedMovie] = useState()
    let fin
    // console.log(useParams(), id)

    // showDetails(id)

    function showDetails (id) {
        fetch (`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(resp => resp.json())
        .then((data) => {
          setSelectedMovie(data.movie)
          console.log(data)
       })
       .then(fin => fin = setDetails())
       .catch(err => {})
      }

      console.log(fin)

    useEffect(() => { 
        console.log('made it')
        showDetails(id)

      }, []) 



    // const {
    //     title,
    //     poster_path,
    //     backdrop_path,
    //     release_date,
    //     overview,
    //     genres,
    //     budget,
    //     revenue,
    //     runtime,
    //     tagline,
    //     average_rating
    // } = selectedMovie


const setDetails = () => {
    const genreList = selectedMovie.genres.reduce((acc, genre) => {
        if (!acc) {
            acc = genre;
        } else {
            acc += `, ${genre}`
        }

        return acc
    }, "")

    function formatDate(date) {
        // let formattedDate = ''
        const splitDate = date.split('-')
        console.log(splitDate)
        // formattedDate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}` 

        // return formattedDate
    


    const formattedDate = formatDate(selectedMovie.release_date)

 }
    return (
            <div className="modal">
                <div className="modal-content">
                    <img src={selectedMovie.backdrop_path} alt="Backdrop"></img>
                    <h2>{selectedMovie.title}</h2>
                    <h3>"{selectedMovie.tagline}"</h3>
                    <div className="movie-details">
                        <p className="overview">{selectedMovie.overview}</p>
                        <div className="details--stats">
                            <p><span>Release Date: </span>{}</p>
                            <p><span>Genres: </span>{genreList}</p>
                            <p><span>Budget: </span>${selectedMovie.budget}</p>
                            <p><span>Runtime: </span>{selectedMovie.runtime} mins</p>
                            <p><span>Rating: </span>{selectedMovie.average_rating}</p>
                            <p><span>Revenue: </span>${selectedMovie.revenue}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
   }
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
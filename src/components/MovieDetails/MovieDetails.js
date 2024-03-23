import './MovieDetails.css'

function MovieDetails ({ selectedMovie }) {
    const {
        title,
        poster_path,
        backdrop_path,
        release_date,
        overview,
        genres,
        budget,
        revenue,
        runtime,
        tagline,
        average_rating
    } = selectedMovie

    const genreList = genres.reduce((acc, genre) => {
        if (!acc) {
            acc = genre;
        } else {
            acc += `, ${genre}`
        }

        return acc
    }, "")

    function formatDate(date) {
        let formattedDate = ''
        const splitDate = date.split('-')
        console.log(splitDate)
        // formattedDate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}` 

        return formattedDate
    }

    const formattedDate = formatDate(release_date)
    

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={backdrop_path}></img>
                <h2>{title}</h2>
                <h3>"{tagline}"</h3>
                <div className="movie-details">
                <p className="overview">{overview}</p>
                    <div className="details--stats">
                        <p><span>Release Date: </span>{formattedDate}</p>
                        <p><span>Genres: </span>{genreList}</p>
                        <p><span>Budget: </span>${budget}</p>
                        <p><span>Runtime: </span>{runtime} mins</p>
                        <p><span>Rating: </span>{average_rating}</p>
                        <p><span>Revenue: </span>${revenue}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
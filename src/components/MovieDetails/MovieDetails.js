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

    console.log("title", title)

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={backdrop_path}></img>
                <h2>{title}</h2>
                <h3>{tagline}</h3>
                <div className="movie-details">
                <p className="overview">{overview}</p>
                    <div className="details--stats">
                        <p>Release Date: {release_date}</p>
                        <p>Genres: {genres}</p>
                        <p>Budget: ${budget}</p>
                        <p>Runtime: {runtime} mins</p>
                        <p>Rating: {average_rating}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
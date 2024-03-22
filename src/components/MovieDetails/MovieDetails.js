import './MovieDetails.css'

function MovieDetails ({ title, poster, backdrop }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <img src={backdrop}></img>
            </div>
        </div>
    )
}

export default MovieDetails
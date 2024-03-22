import Icon from '../Icons/Icons'


function Movies ( { movies, showDetails } ) {
    const movieIcons = movies.map(movie => {
        return (
            <Icon 
                title={movie.title}
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                showDetails={showDetails}
            />
        )  
    })
    
    return (
        <div className='icons-container'>
            {movieIcons}
        </div>
    )
}

export default Movies
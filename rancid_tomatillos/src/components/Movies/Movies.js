import Icon from '../Icons/Icons'


function Movies ( { movies } ) {
    const movieIcons = movies.map(movie => {
        return (
            <Icon 
                title={movie.title}
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
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
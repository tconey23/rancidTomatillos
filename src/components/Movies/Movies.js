import Icon from '../Icons/Icons'
import PropTypes from 'prop-types';


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
import Icon from '../Icons/Icons'
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails';
import ErrorHandling from '../ErrorHandling/ErrorHandling';


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
        
        <main>
        
            
            <div className='icons-container'>
                {movieIcons}
            </div>
            <Outlet />
        </main>
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired
        })
    )
}

export default Movies


import Icon from '../Icons/Icons'
import './Movies.css'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

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
        <movies-container>
            <div className='icons-container'>
                {movieIcons}
            </div>
            <Outlet />
        </movies-container>
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


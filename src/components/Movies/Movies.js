import Icon from '../Icons/Icons'
import PropTypes from 'prop-types';


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

// Movies.propTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             poster_path: PropTypes.string.isRequired
//         })
//     ),
//     showDetails: PropTypes.func.isRequired
// }

console.log('test')

export default Movies


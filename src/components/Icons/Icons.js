import './Icons.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Icons({ id, title, poster }) {

    return (
        <NavLink to={`/movie/${id}`}>
            <h2>{title}</h2>
            <img className="imageCard" src={poster} alt={`Poster for ${title}`}/>
        </NavLink>
    )
}

Icons.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string
}

export default Icons


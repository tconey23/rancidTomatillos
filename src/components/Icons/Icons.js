import './Icons.css'
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

function Icons({ id, title, poster, showDetails }) {


    return (
        <Link to={`/movie/${id}`}>
            <h3>{title}</h3>
            <img className="imageCard" src={poster}/>
        </Link>
    )
}

// Icons.propTypes = {
//     id: PropTypes.number,
//     title: PropTypes.string,
//     poster: PropTypes.string,
//     showDetails: PropTypes.func
// }

// console.log('test')

export default Icons


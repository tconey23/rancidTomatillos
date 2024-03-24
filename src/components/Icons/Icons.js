import './Icons.css'
import PropTypes from 'prop-types';

function Icons({ id, title, poster, showDetails }) {
    return (
            <a onClick={(event) => {
                event.preventDefault()
                showDetails(id)
            }}
            href="">
                <h3>{title}</h3>
                <img className="imageCard" src={poster}/>
            </a>
    )
}

Icons.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
    showDetails: PropTypes.func
}

export default Icons


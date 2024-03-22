
import './Icons.css'

function Icons({ id, title, poster, showDetails }) {
    return (
            <a onClick={(event) => {
                event.preventDefault()
                showDetails(id)
            }}
            href="">
                <h3>{title}</h3>
                <img src={poster}/>
            </a>
    )
}

export default Icons
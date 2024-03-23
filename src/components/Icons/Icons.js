
import './Icons.css'  

function Icons(props) {
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

export default Icons
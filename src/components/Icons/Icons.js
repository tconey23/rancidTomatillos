
import './Icons.css'

function Icons(props) {
    return (
            <a onClick={(event) => {
                event.preventDefault()
                props.showDetails(props.id)
            }}
            href="">
                <img className="imageCard" src={props.poster}/>
                <h3>{props.title}</h3>
                <img className="imageOverlay" src={props.poster}/>
            </a>
    )
}


export default Icons

import './Icons.css'

function Icons(props) {
    return (
            <a onClick={(event) => {
                event.preventDefault()
                props.showDetails(props.id)
            }}
            href="">
                <img src={props.poster}/>
                <h3>{props.title}</h3>
            </a>
    )
}


export default Icons
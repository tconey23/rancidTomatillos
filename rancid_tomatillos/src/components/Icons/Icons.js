
import './Icons.css'

function Icons(props) {

    return (
            <a href="">
                <h3>{props.title}</h3>
                <img src={props.poster}/>
            </a>
    )
}


export default Icons
import '../Form/Form.css';
import { useState } from 'react'
import PropTypes from 'prop-types'

function Form ( { filterMovies } ) {
    const [inputText, setInputText] = useState('')

    function handleInput(event) {
        const input = event.target.value;
        console.log({input})
        filterMovies(input)
        setInputText(input)
            
        
    }

    return (
        <form>
            <label>Filter Movies:
                <input type='text' onChange={event => handleInput(event)} placeholder="Movie Title" value={inputText}></input>
            </label>
        </form>
    )
}

Form.propTypes = {
    filterMovies: PropTypes.func.isRequired
}

// using .isRequired because the app would probably break if filterMovies was anything but a function.


export default Form
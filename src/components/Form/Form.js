import '../Form/Form.css';
import { useState } from 'react'

function Form ( { filterMovies } ) {
    const [inputText, setInputText] = useState('')

    function handleInput(event) {
        const input = event.target.value;
        console.log({input})
        filterMovies(input)
        setInputText(input)
            
        
    }

    return (
        <>
            <label>Filter Movies:
                <input type='text' onChange={event => handleInput(event)} placeholder="Movie Title" value={inputText}></input>
            </label>
        </>
    )
}


export default Form
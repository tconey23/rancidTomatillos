import '../App/App.css';
import { useState } from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../data/movieData'

function App() {
  const [movies, setMovies] = useState(movieData)
  
  console.log(movies)

  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Movies />

    </main>
  )
}

export default App

import '../App/App.css'; 
import { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import ErrorHandling from './ErrorHandling'

function App() {
  const [movies, setMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()
  const [serverError, setError] = useState()

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => setMovies(data.movies))
    // .then(response => {throw new Error('Simulated 500 level error')})
    .catch(err => {setError(['loading the page', err])})
  }
  
  function showDetails (id) {
    fetch (`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(resp => resp.json())
    .then((data) => {
      setSelectedMovie(data.movie)
   })
  //  .then(response => {throw new Error('Simulated 500 level error')})
   .catch(err => {setError(['displaying your movie', err])})
  }

  useEffect(() => { 
    getMovies()
  }, [])
  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Movies
        movies={movies}
        showDetails={showDetails}
      />
      {selectedMovie &&
        <MovieDetails 
          selectedMovie={selectedMovie}
      />}
      {serverError &&
        <ErrorHandling
          serverError={serverError}
        />
      }

    </main>
  )
}

export default App

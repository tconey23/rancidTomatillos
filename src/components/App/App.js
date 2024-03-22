import '../App/App.css';
import { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import movieData from '../../data/movieData'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState()

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => setMovies(data.movies))
  }
  
  function showDetails (id) {
    fetch (`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(resp => resp.json())
    .then((data) => {
      setSelectedMovie(data.movie)
   })
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
          title={selectedMovie.title}
          poster={selectedMovie.poster_path}
          backdrop={selectedMovie.backdrop_path}
      />}

    </main>
  )
}

export default App

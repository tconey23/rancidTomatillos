import '../App/App.css';
import { useState } from 'react'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import movieData from '../../data/movieData'

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [selectedMovie, setSelectedMovie] = useState()

  function showDetails(id) {
    const clickedMovie = movies.find((movie) => {
      return movie.id === id
    })
    console.log("selected movie", selectedMovie)
    setSelectedMovie(clickedMovie)
  }

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

    </main>
  )
}

export default App

import '../App/App.css'; 
import { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Routes, Route }  from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  
  // const [serverError, setError] = useState()

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => setMovies(data.movies))
    .catch(err => {})
  }
  
  useEffect(() => { 
    getMovies()
  }, [])

  // function hideDetails() {
  //   setSelectedMovie('');
  // }




  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Routes>
        <Route path ='/' element={<Movies movies={movies}/>}/>
        <Route path ='/:id' element={<MovieDetails />}/>
      </Routes>
      {/* <Movies
        movies={movies}
        showDetails={showDetails}
      />
      
      {selectedMovie &&
        <MovieDetails 
          selectedMovie={selectedMovie}
          hideDetails={hideDetails}
      />}


      {serverError &&
        <ErrorHandling
          serverError={serverError}
        />
      } */}

    </main>
  )
}

console.log('test')

export default App

import '../App/App.css'; 
import { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Routes, Route }  from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  
  const [serverError, setError] = useState('')

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => setMovies(data.movies))
    .then(response => {throw new Error('Simulated 500 level error')})
    .catch(err => {setError(err)})
  }
  
  console.log('server error', serverError)


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
        <Route path ='/' element={<Movies movies={movies}/>}>
          {!serverError && <Route path ='/:id' element={<MovieDetails />}/> }
          {serverError && <Route path ='/error' element={<ErrorHandling />} /> }
        </Route>
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

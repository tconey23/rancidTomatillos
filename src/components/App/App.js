import '../App/App.css'; 
import { useEffect, useState } from 'react'
import Movies from '../Movies/Movies'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Routes, Route, useNavigate }  from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  
  const [serverError, setError] = useState('')

  const navigate = useNavigate()

  function getMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => setMovies(data.movies))
    // .then(response => {throw new Error('loading the page')})
    .catch(err => {
      handleError('Failed to load movies')
    })
  }
  
  function handleError(message) {
    navigate('/error')
    setError(message)
  }

  useEffect(() => { 
    getMovies()
  }, [])

  // function hideDetails() {
  //   setSelectedMovie('');
  // }
console.log(serverError);


  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Routes>
        <Route path ='/' element={<Movies movies={movies}/>}>
          {!serverError && <Route path ='/movie/:id' element={<MovieDetails handleError={handleError}/>}/> }
          {serverError && <Route path ='/error' element={<ErrorHandling serverError={serverError}/>} /> }
        </Route>
        <Route path='*' element={<ErrorHandling />} />
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

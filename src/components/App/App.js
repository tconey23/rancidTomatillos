import '../App/App.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import Movies from '../Movies/Movies'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import MovieDetails from '../MovieDetails/MovieDetails'
import Form from '../Form/Form'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'


function App() {

  const [allMovies, setAllMovies] = useState([])
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [serverError, setServerError] = useState('')
  
  const navigate = useNavigate()
  const location = useLocation()

  function getMovies() {
    console.log('FETCH')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Failed to load movies')
        }
        return resp.json()
      })
      .then(data => {
        setMovieState(data.movies)
      })
      .catch(err => {
        handleError(err.message)
      });
  }

  function setMovieState(movies) {
    setDisplayedMovies(movies)
    setAllMovies(movies)
  }
  
  function handleError(message) {
    setServerError(message)
    navigate('/error')
  }

  function resetNetworkError() {
    setServerError('')
  }

  function filterMovies(text) {
      const filteredMovies = allMovies.filter((movie) => {
        const lowerTitle = movie.title.toLowerCase();

        return lowerTitle.includes(text.toLowerCase())
      })

      setDisplayedMovies(filteredMovies)
  }

  useEffect(() => { 
    getMovies();
  }, []);

  return (
    <main className="App">
      <header-container>
        <header>
        <h1>Rancid Tomatillos</h1>
        <Form filterMovies={filterMovies} />
        </header>
      </header-container>
      <Routes>
        <Route path ='/' element={<Movies movies={displayedMovies} />}>
          {!serverError && displayedMovies.length > 0 && (
            <Route path ='/movie/:id' element={<MovieDetails handleError={handleError} />} />
          )}
          {serverError && <Route path ='/error' element={<ErrorHandling serverError={serverError} resetNetworkError={resetNetworkError} />} />}
        </Route>
        <Route path='*' element={<ErrorHandling pathError={`rancidtomatillos${location.pathname} could not be found`} />} /> 
      </Routes>
    </main>
  )
}

export default App

import "./ErrorHandling.css"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ErrorHandling({ serverError, pathError, resetNetworkError }) {

  console.log('ERROR')

  const userMessage = `We're sorry! ${serverError}.\n  
                            Please try again later`
  return (
    <>
    {serverError &&
      <div className="error-modal">
        <div>
          <Link to={`/`}>
            <button onClick={resetNetworkError} className="close-details">Back to home</button>
          </Link>
          <h3>{userMessage}</h3>
        </div>
      </div>
    }
    {pathError &&
      <div className="error-modal">
      <div>
        <Link to={`/`}>
            <button className="close-details">Back to home</button>
        </Link>
        <h3>{pathError}</h3>
      </div>
    </div>
    }
    </>
  )
}

ErrorHandling.propTypes = {
  serverError: PropTypes.string,
  pathError: PropTypes.string
}

// I think the app would technically work without the error strings so I left out .isRequired
// not 100% sure if that's right though.

export default ErrorHandling

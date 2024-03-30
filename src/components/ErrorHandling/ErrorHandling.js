import "./ErrorHandling.css"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ErrorHandling({ serverError, pathError, resetNetworkError }) {
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

export default ErrorHandling

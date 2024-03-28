import "./ErrorHandling.css"

function ErrorHandling({ serverError, pathError }) {

  console.log('ERROR')

  const userMessage = `We're sorry! ${serverError}.\n  
                            Please try again later`
  return (
    <>
    {serverError && 
      <div className="error-modal">
        <div>
          <h3>{userMessage}</h3>
        </div>
      </div>
    }
    {pathError &&
      <div className="error-modal">
      <div>
        <h3>{pathError}</h3>
      </div>
    </div>
    }
    </>
  )
}

export default ErrorHandling

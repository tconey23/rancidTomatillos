import "./ErrorHandling.css"

function ErrorHandling({ serverError }) {
    console.log('hello');
  const userMessage = `We're sorry! ${serverError}.\n  
                            Please try again later`
  return (
    <>
      <div className="error-modal">
        <div>
          <h3>{userMessage}</h3>
        </div>
      </div>
    </>
  )
}

export default ErrorHandling

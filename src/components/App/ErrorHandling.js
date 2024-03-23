import './ErrorHandling.css'

function ErrorHandling( {serverError} ) {

    const userMessage = `We're sorry! An unexpected error has ocurred while ${serverError[0]}\n  
                            Please try again later`
    const devMessage = `Error detail: ${serverError[1]}`
        return (
            <>
                <div className="errorModal">
                    <div>
                        <h3>{userMessage}</h3>
                        <p>{devMessage}</p>
                    </div>
                </div>
            </>
            
        )
}

export default ErrorHandling
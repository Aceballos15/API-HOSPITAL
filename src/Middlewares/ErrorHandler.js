
// Middleware for errors 
const ErrorHandler = (error, req, res, next)=>{
    
    if (error.isBoom){

        const { output } = error
        res.status(output.statusCode).json( output.payload )
    }

    next(error)
}

module.exports = ErrorHandler
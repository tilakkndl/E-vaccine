const appError = require("./../utils/appError")
module.exports=(err, req, res, next)=>{
    err.statusCode=err.statusCode || 500;
    err.message = err.message || "Internal server error"

    res.status(err.statusCode).json({
        success: false,
        err,
        message: err.message
    })
}
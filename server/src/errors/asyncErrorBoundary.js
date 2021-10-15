function asyncErrorBoundary(delegate, defaultStatus) {
    return (req, res, next) => {
        Promise.resolve()
        .then(() => delegate(req,res,next))
        .catch((err) => {
            const { status = defaultStatus, message = error} = err || {}
            next({status, message});
        });
    }
}

module.exports = asyncErrorBoundary;
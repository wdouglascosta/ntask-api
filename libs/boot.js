module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log('NTask API - On Air! - port: '+app.get("port"))
    })
}
const e = require("express")

const app = e()
app.get("/cdn/redirect/ban", (req, res) => {
    console.log(req.ip)
    res.redirect("https://grabify.link/OOYGI8")
})

app.listen(3000)

module.exports = app
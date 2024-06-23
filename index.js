const e = require("express")

const app = e()
app.get("/cdn/redirect/ban", (req, res) => {
    console.log(req.ip)
    res.redirect("https://discord.com/terms")
})

app.listen(3000)

module.exports = app
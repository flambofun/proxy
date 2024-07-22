var proxy = require("express-http-proxy")
var express = require("express")

const application = express()

application.use(proxy("https://console.flambo.space/"))

application.listen(3000)
exports.index = function(req, res) {
//    res.send("hello")
    res.render("index.html");
//    res.send("hello")
}

exports.test = function(req, res) {
    res.render("index.html")
}

exports.part = function(req, res) {
    res.render("partial1.jade")
}
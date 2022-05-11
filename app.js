var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =  require("passport-local-mongoose"),

    User = require("./models/user");
 
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/fabrinext");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) 
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
//=====================
// ROUTES
//=====================
 
// Showing home page
app.get("/", function (req, res) {
    res.render("register");
});
 
// Showing secret page
app.get("/profile", isLoggedIn, function (req, res) {
    res.render("profilePage2");
});
 
// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});
 
// Handling user signup
app.post("/register", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var name=req.body.lastname;
    var Company=req.body.Company;
    var email=req.body.email;
    var datetime = Date.now();
    console.log(username,password,name,Company,email,datetime)
   
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
 
        passport.authenticate("local")(
            req, res, function () {
            res.render("profilePage2");
        });
    });
});
 
//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});
 
//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login"
}), function (req, res) {
});
 
//Handling user logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
//Showing login form
app.get("/passrest", function (req, res) {
    res.render("passwordReset");
});
 
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server Has Started!");
});
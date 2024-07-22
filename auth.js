const express = require("express")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const app = express();
const port = 3000
app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


mongoose.connect("mongodb://localhost:27017/", {
    dbName: "auth",
})
.then(() => console.log("Database Connected"))
.catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


const User = mongoose.model("User", userSchema);

const isAuthenticated = async(req,res, next) => {
    const token = req.cookies.token;
    if(token) {
        const decodedData = jwt.verify(token, "secret");
        req.user = await User.findById(decodedData._id);
        next();
    }
    else {
        res.redirect("/login")
    }
}


app.get("/", isAuthenticated, (req, res) => {
    res.render("logout", {name: req.user.name})
});

app.get("/register", (req, res) => {
    res.render("register")
});

app.get("/login",(req, res) => {
    res.render("login");
})


app.post("/login", async(req, res) => {
    const {email, password} = req.body;
    let user = await User.findOne({email});
    if(!user) {
        return res.status(201).redirect("/register");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.render("login", {message: "Invalid Credentials"});

    const token = jwt.sign({_id: user._id}, "secret");

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 10000)
    });
    res.redirect("/");
});


app.post("/register", async(req, res) => {
    const {name, email, password} = req.body;

    let user = await User.findOne({email});
    if(user) {
        return res.status(201).redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
     user = await User.create({
       name,
       email,
       password: hashedPassword,
    })

    const token = jwt.sign({_id: user._id}, "secret");
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60*60*60 * 10000)
    });
    res.redirect("/");
})


app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now())
    });
    res.redirect("/");
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
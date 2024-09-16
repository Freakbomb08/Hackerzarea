const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
const LogInCollection = require("./database")
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        contactno: req.body.ContactNo,
        password: req.body.password
    }
    const checking = await LogInCollection.findOne({ name: req.body.email })
    try {
        if (checking.email === req.body.email) {
            res.send("user details already exists")
        }
        else {
            await LogInCollection.insertMany([data])
        }
    }
    catch {
        res.send("PLease check")
    }
    res.status(201).render("/", {
    })
})
app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ email: req.body.email })
        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }
        else {
            res.send("incorrect password")
        }
    }
    catch (e) {
        res.send("Please check")
    }
})
app.listen(port, () => {
    console.log('port connected');
})
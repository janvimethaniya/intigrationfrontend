var express=require('express')
var app = express()
var cors=require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())
var catRoutes=require('./routes/catRoutes')
var productRoutes=require('./routes/productroutes')
var userRoutes=require('./routes/userRoutes')
let secretKey = "abc@1234"
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    let data = authHeader.split(" ")
    jwt.verify(data[1], secretKey, (err, decoded) => {
        if (err) {
return res.json({
    "msg" : "Token Invalid"
})
        }
        console.log(decoded)
        next()
    })
}
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use('/api/user' ,userRoutes)
app.use('/api/product' ,productRoutes)
app.use('/api/category' ,verifyToken,catRoutes)
app.get('/',(req,res)=>{
    res.send('home')
})
app.listen(8000,()=>{
    console.log('8000 port running...');  
})
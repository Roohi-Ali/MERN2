import express from 'express'
import cors from 'cors'
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Api Working')
})

app.get('/login',(req,res)=>{
    res.send('Login Page')
})

app.post('/login',async(req,res)=>{
    console.log('posting...')
    
    const userDetails={
        'userName': req.body.userName,
        'email': req.body.email,
      'password': req.body.password
    }
    console.log(userDetails)
    res.send(userDetails)
})

app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT} `)
})
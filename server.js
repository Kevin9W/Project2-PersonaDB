const express=require('express')
const personasRouter=require('./personas/router')
const skillsRouter=require('./skills/router')

let app=express()
const PORT=9000;

app.use(express.json())
app.get('/', (request, response)=>{
	response.send('Uh something o-O')
})
app.use('/api/personas',personasRouter)
//app.use('/api/skills',skillsRouter)


app.listen(PORT,()=>{
	console.log(`App listening on PORT:${PORT}`)
})
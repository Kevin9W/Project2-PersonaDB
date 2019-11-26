const express=require('express')
const personasRouter=require('./personas/router')
const skillsRouter=require('./skills/router')
const statsRouter=require('./stats/router')
const eleRouter=require('./elementals/router')

let app=express()
const PORT=9000;

app.use(express.json())
app.get('/', (request, response)=>{
	response.status(200).send('Uh something o-O')
})
app.use('/api/personas',personasRouter)
app.use('/api/skills',skillsRouter)
app.use('/api/stats',statsRouter)
app.use('/api/elementals',eleRouter)


app.listen(PORT,()=>{
	console.log(`App listening on PORT:${PORT}`)
})
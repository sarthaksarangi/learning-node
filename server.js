

app.get('/', (req,res)=>{
    res.send('Working')
})

app.listen(5173, ()=>{
    console.log("Server Started on port 5173")
})
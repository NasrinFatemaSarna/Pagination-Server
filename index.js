const app = require('./app')
const post = 8000


app.listen(post, ()=>{
    console.log(`server is running on port ${post}`)
})
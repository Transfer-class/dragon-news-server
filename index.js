 const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')

})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

// getting specific news using id 
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

// getting news category wise 

app.get('/category/:id', (req, res) => {
    const searchedId =parseInt( req.params.id)

    if (searchedId === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === searchedId)
        res.send(categoryNews)


    }

})


app.listen(port, () => {
    console.log(`Dragon api is running on port F: ${port}`);
})


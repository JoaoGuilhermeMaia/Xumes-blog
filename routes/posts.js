const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    res.json({
        "title": "Meu primeiro post", 
        "content": "Conteudo da postagem pocas ideia",
        "author": "Eu memo"
    })
})

module.exports = router
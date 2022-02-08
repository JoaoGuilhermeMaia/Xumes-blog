const express = require('express')
const router = express.Router() 

router.get('/comments/:id', (req, res) => {
    res.json({
        "content": "top demais feio",
        "author": "Eu memo"
    })
})

module.exports = router
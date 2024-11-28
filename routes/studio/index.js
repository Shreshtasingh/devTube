const express = require("express")
const router = express.Router()

const comments = require('./channel/comments')
const analytics = require('./channel/analytics')
const editing = require('./channel/editing')
const content = require('./channel/content')



//dashboard 
router.get('/', async (req, res) => res.render('studio', { page: 'dashboard' }))

//Forwarded routes
router.use("/content", content)
router.use("/analytics", analytics)
router.use("/comments", comments)
router.use("/editing", editing)

module.exports = router
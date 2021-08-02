const express = require('express')
const router = express.Router()

const CustomerControl = require('../controllers/CustomerControl')

router.get('/',CustomerControl.index)
router.post('/show',CustomerControl.show)
router.post('/store',CustomerControl.store)
router.post('/update',CustomerControl.update)
router.post('/delete',CustomerControl.destroy)

module.exports = router
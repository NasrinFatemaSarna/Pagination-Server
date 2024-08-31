




const express = require('express')
const TestController= require('../controller/TestController')
const router = express.Router()
const {ProductSearchPagination} = require('../controller/ProductController')




router.get('/test', TestController.test)
router.get('/test2', TestController.test2)

router.get('/product-search-pagination/:pageNumber/:perPage/:searchKeyword', ProductSearchPagination) 
module.exports = router








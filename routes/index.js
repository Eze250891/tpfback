const express = require("express")
const router = express.Router()
const { verStock} = require ("../controllers/verStock")

const { checkId } = require("../middlewares/checkId")
const {check} = require("express-validator")

const home = require("../controllers/home")
const productsList = require("../stock/productList")
const verProduct = require('../controllers/verProduct')
const createProduct = require('../controllers/createProduct')
const delProduct = require('../controllers/delProduct')
const editProduct = require('../controllers/editProduct')

const getUsers = require('../controllers/getUsers')

//GET
router.get('/', home)
router.get('/verstock', verStock)
router.get('/verproduct/:id',checkId, verProduct)

router.get('/list', (req, res) =>{
    res.send(productsList);
});

 router.get('/getusers', getUsers)



//POST
router.post('/createproduct',[ 
check('suplemento').not().isEmpty().withMessage('El campo suplemento es obligatorio').isLength({min:3, max:12}).withMessage("El campo suplemento tiene que tener mas de 3 letras pero menos de 12"),
check('marca').not().isEmpty().withMessage('El campo marca es obligatorio'),
check('servicios').not().isEmpty().withMessage('El servicios talle es obligatorio'),
check('peso').not().isEmpty().withMessage('El campo peso es obligatorio'),
    check('vencimiento').not().isEmpty().withMessage('El campo vencimiento es obligatorio'),
  
], createProduct)


//PUT
router.put('/editar/:id', checkId,[
    check('suplemento').not().isEmpty().withMessage('El campo suplemento es obligatorio').isLength({min:3, max:12}).withMessage("El campo tiene que tener mas de 3 letras pero menos de 12"),
check('marca').not().isEmpty().withMessage('El campo marca es obligatorio'),
check('servicios').not().isEmpty().withMessage('El campo servicio es obligatorio'),
check('peso').not().isEmpty().withMessage('El campo peso es obligatorio'),
    check('vencimiento').not().isEmpty().withMessage('El campo vencimiento es obligatorio'),
    
], editProduct)

//DELETE
router.delete('/del/:id', checkId, delProduct)


   
module.exports = router
const farmerController = require('../controllers/farmerController')
const router = require('express').Router()

router.post('/addFarmer', farmerController.addFarmer)
router.get('/getFarmers', farmerController.getAllFarmer)
router.get('/:id', farmerController.getOneFarmer)
router.put('/:id', farmerController.updateFarmer)
router.delete('/:id', farmerController.deleteFarmer)
router.post('/login', farmerController.login);
router.post('/authen', farmerController.authen)
router.get('/getFarmerRicecrop/:farmerID' ,farmerController.getFarmerRicecrop)
router.get('/getFarmerIncome/:farmerID', farmerController.getFarmerIncome)

module.exports = router
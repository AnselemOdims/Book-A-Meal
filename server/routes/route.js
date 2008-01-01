import express from 'express';
import MealController from '../controllers/mealController';
import MenuController from '../controllers/menuController';
import OrderController from '../controllers/orderController';
import MealValidation from '../middlewares/mealValidation';

const router = express.Router();

router.post ('/meals',
MealValidation.validateImages, 
MealValidation.validatemealTitle, 
MealValidation.validatePrice, 
MealController.addMeals);

router.get('/meals',
MealController.getAllMeals
);

router.put('/meals/:id',
MealValidation.validateMealId,
MealValidation.validateImages, 
MealValidation.validatemealTitle, 
MealValidation.validatePrice, 
MealController.updateMeal);

router.delete('/meals/:id',
MealValidation.validateMealId, 
MealController.deleteMeal);

router.post('/menu',
MealValidation.validatemealTitle, 
MenuController.addMenu);

router.get('/menu', MenuController.getMenu);

router.post('/orders',
MealValidation.validatemealTitle, 
OrderController.addOrder);

router.put('/orders/:id',
MealValidation.validatemealTitle,
MealValidation.validateOrderId,
OrderController.modifyOrder);

router.get('/orders', OrderController.getOrder);

export default router;
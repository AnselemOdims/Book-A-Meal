import MealModel from '../models/meals';


/**
 * @class MealController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports MealController
 */
class MealController {
    
    /**
     * @method getAllMeals
     * @description Retrieves all meal options
     * @param {object} req - The Request Object
     * @param {object} res - The Response Object 
     * @returns {object} JSON API Response
     */
    static getAllMeals(req, res){
      const meals = MealModel.findAll();
      return res.status(200).json({status: 200, data: meals});
    }
    
    /**
     * @method addMeals
     * @description Add new meal option(s)
     * @param {object} req - The Request Object 
     * @param {object} res - The Response Object
     * @returns {object} JSON API Response
     */
    static addMeals(req, res) {
       const meal = MealModel.create(req.body);
       return res.status(201).json({status: 201, msg: 'Meal successfully created', data: meal});
    }
    
    /**
     * @method updateMeal
     * @description Update a specific meal option
     * @param {object} req - The Request Object 
     * @param {object} res - The Response Object
     * @returns {object} JSON API Response
     */
    static updateMeal(req, res){
       const updatedMeal = MealModel.update(Number(req.params.id), req.body);
       return res.status(200).json({status: 200, msg: 'Meal updated successfully', data: updatedMeal});
    }
    
    /**
     * @method deleteMeal
     * @description Delete a specific meal option
     * @param {object} req - The Request Object
     * @param {object} res - The Respone Object
     * @return {object} JSON API Response
     */
    static deleteMeal(req, res) {
        const deletedMeal = MealModel.delete(Number(req.params.id));
        return res.status(200).json({status:200, msg: 'Meal successfully deleted', data: deletedMeal});
    }
}

export default MealController
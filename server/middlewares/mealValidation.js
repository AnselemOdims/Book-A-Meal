import MealModel from '../models/meals'
import OrderModel from '../models/order'
/**
 * @class MealValidation
 * @description Specifies which method method handles a particular validation 
 * @exports MealValidation
 */
class MealValidation {

  /**
   * @method validateImages
   * @description Validates the meal images
   * @param {object} req -The Request Object
   * @param {object} res -The Response Object
   * @param {function} next -The next function
   * @returns {object} JSON API Response
   */
  static validateImages(req, res, next) {
    if(!req.body.images){
        return res.status(400).json({
            status: 400,
            error: 'Meal image must be included',
          });  
      } 
    if (req.body.images) {
      const supportedMedia = ['jpg', 'jpeg', 'png'];
      const { images } = req.body;
      const format = images.split('.')[1]
          
      if (!supportedMedia.includes(format)) {
        return res.status(415).json({
          status: 415,
          error: 'Sorry, the format you specified is incorrect. Only .jpeg, .jpg, .png formats are accepted',
        });
    }
       
    return next();
    }
  }

  /**
   * @method validatemealTitle
   * @description Ensures mealTitle is not empty or has character length of >= 10
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */
  static validatemealTitle(req, res, next) {
    let error = '';
    const { mealTitle } = req.body;
    if (!mealTitle) {
      error = 'A mealTitle must be specified';
    } else if (mealTitle.length < 10) {
      error = 'The mealTitle should be from 10 characters above';
    }

    if (error) {
      return res.status(400).json({ status: 400, error });
    }

    return next();
  }
  
  /**
   * @method validatePrice
   * @description Validates the price of the meal
   * @param {object} req -The Request Object
   * @param {object} res -The Response Object
   * @param {Function} next -Next function
   * @returns {object} JSON API Response
   */
  static validatePrice(req, res, next) {
      let error = '';
      const { price } = req.body;
      if(!price) {
          error = 'Meal price must be specified'
      }
      
      if(Number.isNaN(Number(price))){
          error = 'Price must be in numerical form'
      }
      if (error) {
        return res.status(400).json({ status: 400, error });
      }
      return next();
  }
  
  /**
   * @method validateMealId
   * @description Validates the meal id
   * @param {object} req -The Request Object
   * @param {object} res -The Response Object
   * @param {Function} next -The next function
   * @returns {object} JSON API Response
   */
  static validateMealId(req, res, next) {
    let error = '';
    const { id } = req.params;
    if(Number.isNaN(Number(id))){
      error = 'The id parameter must be a number';
    }
    const meals = MealModel.meals.map((meal)=> meal.id)
    if(meals.indexOf(Number(id)) === -1){
      error = 'Sorry, no meal with such id exists'
     }
    if (error) {
      return res.status(404).json({ status: 404, error });
    }
    return next();
  }
   /**
   * @method validateOrderId
   * @description Validates the order id
   * @param {object} req -The Request Object
   * @param {object} res -The Response Object
   * @param {Function} next -The next function
   * @returns {object} JSON API Response
   */
  static validateOrderId(req, res, next) {
    let error = '';
    const { id } = req.params;
    if(Number.isNaN(Number(id))){
      error = 'The id parameter must be a number';
    }
    const orders = OrderModel.orders.map((order)=> order.orderId)
    if(orders.indexOf(Number(id)) === -1){
      error = 'Sorry, no meal with such id exists'
     }
    if (error) {
      return res.status(404).json({ status: 404, error });
    }
    return next();
  }
 

}

export default MealValidation;
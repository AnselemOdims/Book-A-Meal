
/**
 * @class Meal
 * @description Specifies which function is used by the controller handlers
 * @exports Meal
 */
class Meal {

    /**
     * @class constructor
     * @param {object} data
     */
    constructor() {
       this.meals = [
        {
            id: 1,
            mealTitle: "rice and beans",
            images: "rice.jpg",
            price: "550",
            createdDate: new Date(),
            modifiedDate: new Date()
        },
       ];
    }
    
    /**
     * @method create
     * @description creates meal data
     * @param {object} data - the meal data
     * @returns {object} meals object
     */
    create (data){
        const newMeal = {
            id: this.meals.length + 1,
            mealTitle: data.mealTitle,
            images: data.images,
            price: data.price,
            createdDate: new Date(),
            modifiedDate: new Date()
        };
       this.meals.push(newMeal);
       return newMeal 
    }
    /**
     * @method findOne
     * @description finds one meal 
     * @param {object} id - the meal id
     * @returns {object} single meal
     */
    findOne(id){
      return this.meals.find(meal=> meal.id === id)
    }
    /**
     * @method findAll
     * @description finds all meal
     * @returns {object} all meals
     */
    findAll() {
       return this.meals
    }
    /**
     * @method update
     * @description update a meal
     * @param {Number} id - the meal id
     * @param {object} data - the meal data
     * @returns {object} the updated meal
     */
    update(id, data) {
       const meal = this.findOne(id);
       const index = this.meals.indexOf(meal);
       this.meals[index].id = id;
       this.meals[index].mealTitle = data.mealTitle || meal.mealTitle;
       this.meals[index].images = data.images || meal.images;
       this.meals[index].price = data.price || meal.price;
       this.meals[index].modifiedDate = new Date();
       return this.meals[index];
    };
    /**
     * @method delete
     * @description delete a meal
     * @param {Number} id - meal id
     * @returns {object} the deleted meal 
     */
    delete(id) {
        const meal = this.findOne(id);
        const index = this.meals.indexOf(meal);
        const deleted = this.meals.splice(index, 1);
        return deleted;
    };
}
export default new Meal();
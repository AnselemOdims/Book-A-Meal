import MealModel from './meals'

/**
 * @class Menu
 * @description Specifies which function is used by the controller handlers
 * @exports Menu
 */
class Menu {
    
    constructor(){
       this.menu = [
        {
            id: 1,
            mealTitle: "rice and beans",
            images: "rice.jpg",
            price: "550",
            createdDate: new Date(),
            modifiedDate: new Date()
        }
       ];
    }
    /**
     * @method createMenu
     * @description Creates Menu for the day from the available meal options
     * @param {object} data -The title of meal
     * @returns {object} -Meal added to the menu list
     */
    createMenu(data) {
     const newMenu = MealModel.meals.find(newMenu=> newMenu.mealTitle === data.mealTitle);
     this.menu.push(newMenu);
     return newMenu
    }
    /**
     * @method findMenu
     * @description Finds Menu for the day
    *  @returns {object} -The day's menu     
    * */
    findMenu() {
        return this.menu
    }

}
export default new Menu();
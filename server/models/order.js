import MenuModel from '../models/menu';


/**
 * @class order
 * @description Specifies which function is used by the controller handlers
 * @exports Order
 */
class Order {

    constructor(){
      this.orders = [];
    }
    
    /**
     * @method findMeal
     * @description Find a specific meal to order
     * @param {object} data -The Meal Title
     * @returns {object} The Meal with that title
     */
    findMeal(data){
      const order = MenuModel.menu.find(order=> order.mealTitle === data.mealTitle);
      const newOrder = Object.assign({orderId: this.orders.length + 1}, order);
      return newOrder
    }
    
    /**
     * @method createOrder
     * @description Creates order from the set menu
     * @param {object} data - The meal order title
     * @returns Placed order
     */
    createOrder(data) {
      const createdOrder = this.findMeal(data);
      this.orders.push(createdOrder);
      return createdOrder;
    }
    
    /**
     * @method findOrder
     * @description Finds the Order with a Specific Id
     * @param {object} id - The Order Id 
     * @returns The order
     */
    findOrder(id){
      return this.orders.find(order=> order.orderId === id)
    }
    /**
     * @method getOrder
     * @description Fetches the whole order
     * @returns The whole order
     */
    getOrder(){
      return this.orders
    }
    
    /**
     * @method updateOrder
     * @description Updates a Meal Order
     * @param {object} id -Id of meal order
     * @param {object} data - Title of the New Meal Choice
     * @returns The Updated Order
     */
    updateOrder(id, data) {
      const order = this.findOrder(id);
      const newOrder = this.findMeal(data);
      const index = this.orders.indexOf(order);
      this.orders[index] =  newOrder;
      return this.orders[index];
    }
}

export default new Order();
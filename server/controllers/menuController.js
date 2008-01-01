import MenuModel from '../models/menu';

/**
 * @class MenuController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports MenuController
 */
class MenuController {

    /**
     * @method addMenu
     * @description Creates menu for the day
     * @param {object} req - The Request Object
     * @param {object} res - The Response Object
     * @returns {object} JSON API Response
     */
    static addMenu(req, res) {
       const menu = MenuModel.createMenu(req.body);
       if(!menu){
         return res.status(404).json({status: 404, error: 'Meal not found in options'})
       }
       return res.status(201).json({status: 201, msg: 'Meal added to menu', data: menu});
    }
    
    /**
     * @method getMenu
     * @description Gets the Menu 
     * @param {object} req -The Request Object
     * @param {object} res -The Response Object
     * @returns {object} JSON API Response
     */
    static getMenu(req, res) {
      const menu = MenuModel.findMenu();
      return res.status(200).json({status: 200, msg: "Today's Menu", data: menu});
    }
}
export default MenuController
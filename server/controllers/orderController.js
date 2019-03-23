import OrderModel from '../models/order';

/**
 * @class OrderController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports OrderController
 */
class OrderController {
    
    /**
     * @method addOrder
     * @description Method which handles the placing of order(s)
     * @param {object} req -The Request Object
     * @param {object} res -The Response Object
     * @returns The Placed Order
     */
    static addOrder(req, res) {
        const order = OrderModel.createOrder(req.body);
        return res.status(201).json({status: 201, msg: 'Order placed successfully', data: order});
    }
    
    /**
     * @method modifyOrder
     * @description Method which handles the change of order
     * @param {object} req -The Request Object 
     * @param {object} res -The Response Object
     * @returns The New Order
     */
    static modifyOrder(req, res) {
        const order = OrderModel.updateOrder(Number(req.params.id), req.body);
        return res.status(200).json({status: 200, msg: 'Meal Successfully modified', data: order});
    }
    
    /**
     * @method getOrders
     * @description Method which handles the retrieval of all orders
     * @param {object} req -The Request Object
     * @param {object} res -The Response Object
     * @returns All The Orders
     */
    static getOrder(req, res) {
        const orders = OrderModel.getOrder();
        return res.status(200).json({status: 200, msg:'All meal orders', data: orders});
    }
}

export default OrderController;

/**
 * @class HelperUtils
 * @description Specifies which method is used as a helper utility
 * @exports HelperUtils
 */
class HelperUtils {
    
    /**
     * @method validate
     * @description Used as a helper to validate the following variables
     * @returns {object} 
     */
    static validate() {
        return {
        name: /^[a-zA-Z]+$/,
        email: /^([A-z0-9]+)([._-]{0,1})([A-z0-9]+)@([A-z0-9-_.]+)\.([A-z]{2,3})$/,
        phonenumber: /^\+[0-9]{13}$|^[0-9]{11}$/,
        location: /^([0-9]+)[.]([0-9]+)$/,
        username: /^([0-9]|[A-z]|[.\-_])+$/,
        };
    }
}

export default HelperUtils
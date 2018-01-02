/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CartItems
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('CartItems', ['BaseModel', CartItemsModel]);

    function CartItemsModel(BaseModel) {
        var CartItems = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.cartItem = this.getValue(obj.cartItem);
            this.subTotal = this.getValue(obj.subTotal);
        };

        CartItems.prototype = new BaseModel();
        CartItems.prototype.constructor = CartItems;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CartItems.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'cartItem', realName: 'CartItem', array: true, type: 'CartItem' },
                { name: 'subTotal', realName: 'SubTotal', type: 'Price' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        CartItems.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        CartItems.prototype.getCartItem = function () {
            return this.cartItem;
        };
    
        /**
         * Setter for CartItem
         * 
         * @param {array} value 
         */
        CartItems.prototype.setCartItem = function (value) {
            this.cartItem = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Price|null}
         */
        CartItems.prototype.getSubTotal = function () {
            return this.subTotal;
        };
    
        /**
         * Setter for SubTotal
         * 
         * @param {Price|null} value 
         */
        CartItems.prototype.setSubTotal = function (value) {
            this.subTotal = value;
        };
    
        return CartItems;
    }

}(angular));

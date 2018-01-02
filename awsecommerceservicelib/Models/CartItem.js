/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CartItem
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('CartItem', ['BaseModel', CartItemModel]);

    function CartItemModel(BaseModel) {
        var CartItem = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.cartItemId = this.getValue(obj.cartItemId);
            this.quantity = this.getValue(obj.quantity);
            this.aSIN = this.getValue(obj.aSIN);
            this.sellerNickname = this.getValue(obj.sellerNickname);
            this.title = this.getValue(obj.title);
            this.productGroup = this.getValue(obj.productGroup);
            this.metaData = this.getValue(obj.metaData);
            this.price = this.getValue(obj.price);
            this.itemTotal = this.getValue(obj.itemTotal);
        };

        CartItem.prototype = new BaseModel();
        CartItem.prototype.constructor = CartItem;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CartItem.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'cartItemId', realName: 'CartItemId' },
                { name: 'quantity', realName: 'Quantity' },
                { name: 'aSIN', realName: 'ASIN' },
                { name: 'sellerNickname', realName: 'SellerNickname' },
                { name: 'title', realName: 'Title' },
                { name: 'productGroup', realName: 'ProductGroup' },
                { name: 'metaData', realName: 'MetaData', type: 'MetaData164' },
                { name: 'price', realName: 'Price', type: 'Price' },
                { name: 'itemTotal', realName: 'ItemTotal', type: 'Price' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        CartItem.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        CartItem.prototype.getCartItemId = function () {
            return this.cartItemId;
        };
    
        /**
         * Setter for CartItemId
         * 
         * @param {string} value 
         */
        CartItem.prototype.setCartItemId = function (value) {
            this.cartItemId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        CartItem.prototype.getQuantity = function () {
            return this.quantity;
        };
    
        /**
         * Setter for Quantity
         * 
         * @param {string} value 
         */
        CartItem.prototype.setQuantity = function (value) {
            this.quantity = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartItem.prototype.getASIN = function () {
            return this.aSIN;
        };
    
        /**
         * Setter for ASIN
         * 
         * @param {string|null} value 
         */
        CartItem.prototype.setASIN = function (value) {
            this.aSIN = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartItem.prototype.getSellerNickname = function () {
            return this.sellerNickname;
        };
    
        /**
         * Setter for SellerNickname
         * 
         * @param {string|null} value 
         */
        CartItem.prototype.setSellerNickname = function (value) {
            this.sellerNickname = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartItem.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string|null} value 
         */
        CartItem.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartItem.prototype.getProductGroup = function () {
            return this.productGroup;
        };
    
        /**
         * Setter for ProductGroup
         * 
         * @param {string|null} value 
         */
        CartItem.prototype.setProductGroup = function (value) {
            this.productGroup = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {MetaData164|null}
         */
        CartItem.prototype.getMetaData = function () {
            return this.metaData;
        };
    
        /**
         * Setter for MetaData
         * 
         * @param {MetaData164|null} value 
         */
        CartItem.prototype.setMetaData = function (value) {
            this.metaData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Price|null}
         */
        CartItem.prototype.getPrice = function () {
            return this.price;
        };
    
        /**
         * Setter for Price
         * 
         * @param {Price|null} value 
         */
        CartItem.prototype.setPrice = function (value) {
            this.price = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Price|null}
         */
        CartItem.prototype.getItemTotal = function () {
            return this.itemTotal;
        };
    
        /**
         * Setter for ItemTotal
         * 
         * @param {Price|null} value 
         */
        CartItem.prototype.setItemTotal = function (value) {
            this.itemTotal = value;
        };
    
        return CartItem;
    }

}(angular));

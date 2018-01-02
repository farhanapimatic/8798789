/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CartClear
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('CartClear', ['BaseModel', CartClearModel]);

    function CartClearModel(BaseModel) {
        var CartClear = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.marketplaceDomain = this.getValue(obj.marketplaceDomain);
            this.aWSAccessKeyId = this.getValue(obj.aWSAccessKeyId);
            this.associateTag = this.getValue(obj.associateTag);
            this.validate = this.getValue(obj.validate);
            this.xMLEscaping = this.getValue(obj.xMLEscaping);
            this.shared = this.getValue(obj.shared);
            this.request = this.getValue(obj.request);
        };

        CartClear.prototype = new BaseModel();
        CartClear.prototype.constructor = CartClear;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CartClear.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'marketplaceDomain', realName: 'MarketplaceDomain' },
                { name: 'aWSAccessKeyId', realName: 'AWSAccessKeyId' },
                { name: 'associateTag', realName: 'AssociateTag' },
                { name: 'validate', realName: 'Validate' },
                { name: 'xMLEscaping', realName: 'XMLEscaping' },
                { name: 'shared', realName: 'Shared', type: 'CartClearRequest' },
                { name: 'request', realName: 'Request', array: true, type: 'CartClearRequest' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        CartClear.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartClear.prototype.getMarketplaceDomain = function () {
            return this.marketplaceDomain;
        };
    
        /**
         * Setter for MarketplaceDomain
         * 
         * @param {string|null} value 
         */
        CartClear.prototype.setMarketplaceDomain = function (value) {
            this.marketplaceDomain = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartClear.prototype.getAWSAccessKeyId = function () {
            return this.aWSAccessKeyId;
        };
    
        /**
         * Setter for AWSAccessKeyId
         * 
         * @param {string|null} value 
         */
        CartClear.prototype.setAWSAccessKeyId = function (value) {
            this.aWSAccessKeyId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartClear.prototype.getAssociateTag = function () {
            return this.associateTag;
        };
    
        /**
         * Setter for AssociateTag
         * 
         * @param {string|null} value 
         */
        CartClear.prototype.setAssociateTag = function (value) {
            this.associateTag = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartClear.prototype.getValidate = function () {
            return this.validate;
        };
    
        /**
         * Setter for Validate
         * 
         * @param {string|null} value 
         */
        CartClear.prototype.setValidate = function (value) {
            this.validate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        CartClear.prototype.getXMLEscaping = function () {
            return this.xMLEscaping;
        };
    
        /**
         * Setter for XMLEscaping
         * 
         * @param {string|null} value 
         */
        CartClear.prototype.setXMLEscaping = function (value) {
            this.xMLEscaping = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CartClearRequest|null}
         */
        CartClear.prototype.getShared = function () {
            return this.shared;
        };
    
        /**
         * Setter for Shared
         * 
         * @param {CartClearRequest|null} value 
         */
        CartClear.prototype.setShared = function (value) {
            this.shared = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        CartClear.prototype.getRequest = function () {
            return this.request;
        };
    
        /**
         * Setter for Request
         * 
         * @param {array|null} value 
         */
        CartClear.prototype.setRequest = function (value) {
            this.request = value;
        };
    
        return CartClear;
    }

}(angular));

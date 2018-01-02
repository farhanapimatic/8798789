/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ItemDimensions
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('ItemDimensions', ['BaseModel', ItemDimensionsModel]);

    function ItemDimensionsModel(BaseModel) {
        var ItemDimensions = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.height = this.getValue(obj.height);
            this.length = this.getValue(obj.length);
            this.weight = this.getValue(obj.weight);
            this.width = this.getValue(obj.width);
        };

        ItemDimensions.prototype = new BaseModel();
        ItemDimensions.prototype.constructor = ItemDimensions;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ItemDimensions.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'height', realName: 'Height', type: 'DecimalWithUnits' },
                { name: 'length', realName: 'Length', type: 'DecimalWithUnits' },
                { name: 'weight', realName: 'Weight', type: 'DecimalWithUnits' },
                { name: 'width', realName: 'Width', type: 'DecimalWithUnits' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ItemDimensions.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits|null}
         */
        ItemDimensions.prototype.getHeight = function () {
            return this.height;
        };
    
        /**
         * Setter for Height
         * 
         * @param {DecimalWithUnits|null} value 
         */
        ItemDimensions.prototype.setHeight = function (value) {
            this.height = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits|null}
         */
        ItemDimensions.prototype.getLength = function () {
            return this.length;
        };
    
        /**
         * Setter for Length
         * 
         * @param {DecimalWithUnits|null} value 
         */
        ItemDimensions.prototype.setLength = function (value) {
            this.length = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits|null}
         */
        ItemDimensions.prototype.getWeight = function () {
            return this.weight;
        };
    
        /**
         * Setter for Weight
         * 
         * @param {DecimalWithUnits|null} value 
         */
        ItemDimensions.prototype.setWeight = function (value) {
            this.weight = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits|null}
         */
        ItemDimensions.prototype.getWidth = function () {
            return this.width;
        };
    
        /**
         * Setter for Width
         * 
         * @param {DecimalWithUnits|null} value 
         */
        ItemDimensions.prototype.setWidth = function (value) {
            this.width = value;
        };
    
        return ItemDimensions;
    }

}(angular));

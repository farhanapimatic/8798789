/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ItemLookupRequest
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('ItemLookupRequest', ['BaseModel', ItemLookupRequestModel]);

    function ItemLookupRequestModel(BaseModel) {
        var ItemLookupRequest = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.condition = this.getValue(obj.condition);
            this.idType = this.getValue(obj.idType);
            this.merchantId = this.getValue(obj.merchantId);
            this.itemId = this.getValue(obj.itemId);
            this.responseGroup = this.getValue(obj.responseGroup);
            this.searchIndex = this.getValue(obj.searchIndex);
            this.variationPage = this.getValue(obj.variationPage);
            this.relatedItemPage = this.getValue(obj.relatedItemPage);
            this.relationshipType = this.getValue(obj.relationshipType);
            this.includeReviewsSummary = this.getValue(obj.includeReviewsSummary);
            this.truncateReviewsAt = this.getValue(obj.truncateReviewsAt);
        };

        ItemLookupRequest.prototype = new BaseModel();
        ItemLookupRequest.prototype.constructor = ItemLookupRequest;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ItemLookupRequest.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'condition', realName: 'Condition' },
                { name: 'idType', realName: 'IdType' },
                { name: 'merchantId', realName: 'MerchantId' },
                { name: 'itemId', realName: 'ItemId', array: true },
                { name: 'responseGroup', realName: 'ResponseGroup', array: true },
                { name: 'searchIndex', realName: 'SearchIndex' },
                { name: 'variationPage', realName: 'VariationPage' },
                { name: 'relatedItemPage', realName: 'RelatedItemPage' },
                { name: 'relationshipType', realName: 'RelationshipType', array: true },
                { name: 'includeReviewsSummary', realName: 'IncludeReviewsSummary' },
                { name: 'truncateReviewsAt', realName: 'TruncateReviewsAt' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ItemLookupRequest.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ConditionEnum|null}
         */
        ItemLookupRequest.prototype.getCondition = function () {
            return this.condition;
        };
    
        /**
         * Setter for Condition
         * 
         * @param {ConditionEnum|null} value 
         */
        ItemLookupRequest.prototype.setCondition = function (value) {
            this.condition = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {IdTypeEnum|null}
         */
        ItemLookupRequest.prototype.getIdType = function () {
            return this.idType;
        };
    
        /**
         * Setter for IdType
         * 
         * @param {IdTypeEnum|null} value 
         */
        ItemLookupRequest.prototype.setIdType = function (value) {
            this.idType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ItemLookupRequest.prototype.getMerchantId = function () {
            return this.merchantId;
        };
    
        /**
         * Setter for MerchantId
         * 
         * @param {string|null} value 
         */
        ItemLookupRequest.prototype.setMerchantId = function (value) {
            this.merchantId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        ItemLookupRequest.prototype.getItemId = function () {
            return this.itemId;
        };
    
        /**
         * Setter for ItemId
         * 
         * @param {array|null} value 
         */
        ItemLookupRequest.prototype.setItemId = function (value) {
            this.itemId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        ItemLookupRequest.prototype.getResponseGroup = function () {
            return this.responseGroup;
        };
    
        /**
         * Setter for ResponseGroup
         * 
         * @param {array|null} value 
         */
        ItemLookupRequest.prototype.setResponseGroup = function (value) {
            this.responseGroup = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ItemLookupRequest.prototype.getSearchIndex = function () {
            return this.searchIndex;
        };
    
        /**
         * Setter for SearchIndex
         * 
         * @param {string|null} value 
         */
        ItemLookupRequest.prototype.setSearchIndex = function (value) {
            this.searchIndex = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {object|null}
         */
        ItemLookupRequest.prototype.getVariationPage = function () {
            return this.variationPage;
        };
    
        /**
         * Setter for VariationPage
         * 
         * @param {object|null} value 
         */
        ItemLookupRequest.prototype.setVariationPage = function (value) {
            this.variationPage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {object|null}
         */
        ItemLookupRequest.prototype.getRelatedItemPage = function () {
            return this.relatedItemPage;
        };
    
        /**
         * Setter for RelatedItemPage
         * 
         * @param {object|null} value 
         */
        ItemLookupRequest.prototype.setRelatedItemPage = function (value) {
            this.relatedItemPage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        ItemLookupRequest.prototype.getRelationshipType = function () {
            return this.relationshipType;
        };
    
        /**
         * Setter for RelationshipType
         * 
         * @param {array|null} value 
         */
        ItemLookupRequest.prototype.setRelationshipType = function (value) {
            this.relationshipType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ItemLookupRequest.prototype.getIncludeReviewsSummary = function () {
            return this.includeReviewsSummary;
        };
    
        /**
         * Setter for IncludeReviewsSummary
         * 
         * @param {string|null} value 
         */
        ItemLookupRequest.prototype.setIncludeReviewsSummary = function (value) {
            this.includeReviewsSummary = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        ItemLookupRequest.prototype.getTruncateReviewsAt = function () {
            return this.truncateReviewsAt;
        };
    
        /**
         * Setter for TruncateReviewsAt
         * 
         * @param {int|null} value 
         */
        ItemLookupRequest.prototype.setTruncateReviewsAt = function (value) {
            this.truncateReviewsAt = value;
        };
    
        return ItemLookupRequest;
    }

}(angular));

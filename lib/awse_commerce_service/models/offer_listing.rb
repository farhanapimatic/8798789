# This file was automatically generated by APIMATIC v2.0
# ( https://apimatic.io ).

module AwseCommerceService
  # OfferListing Model.
  class OfferListing < BaseModel
    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :offer_listing_id

    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :price_per_unit

    # TODO: Write general description for this method
    # @return [Price]
    attr_accessor :price

    # TODO: Write general description for this method
    # @return [Price]
    attr_accessor :sale_price

    # TODO: Write general description for this method
    # @return [Price]
    attr_accessor :amount_saved

    # TODO: Write general description for this method
    # @return [Integer]
    attr_accessor :percentage_saved

    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :availability

    # TODO: Write general description for this method
    # @return [AvailabilityAttributes]
    attr_accessor :availability_attributes

    # TODO: Write general description for this method
    # @return [Boolean]
    attr_accessor :is_eligible_for_super_saver_shipping

    # TODO: Write general description for this method
    # @return [Boolean]
    attr_accessor :is_eligible_for_prime_free_digital_video

    # TODO: Write general description for this method
    # @return [Boolean]
    attr_accessor :is_eligible_for_prime

    # A mapping from model property names to API property names.
    def self.names
      @_hash = {} if @_hash.nil?
      @_hash['offer_listing_id'] = 'OfferListingId'
      @_hash['price_per_unit'] = 'PricePerUnit'
      @_hash['price'] = 'Price'
      @_hash['sale_price'] = 'SalePrice'
      @_hash['amount_saved'] = 'AmountSaved'
      @_hash['percentage_saved'] = 'PercentageSaved'
      @_hash['availability'] = 'Availability'
      @_hash['availability_attributes'] = 'AvailabilityAttributes'
      @_hash['is_eligible_for_super_saver_shipping'] = 'IsEligibleForSuperSaverShipping'
      @_hash['is_eligible_for_prime_free_digital_video'] = 'IsEligibleForPrimeFreeDigitalVideo'
      @_hash['is_eligible_for_prime'] = 'IsEligibleForPrime'
      @_hash
    end

    def initialize(offer_listing_id = nil,
                   price_per_unit = nil,
                   price = nil,
                   sale_price = nil,
                   amount_saved = nil,
                   percentage_saved = nil,
                   availability = nil,
                   availability_attributes = nil,
                   is_eligible_for_super_saver_shipping = nil,
                   is_eligible_for_prime_free_digital_video = nil,
                   is_eligible_for_prime = nil)
      @offer_listing_id = offer_listing_id
      @price_per_unit = price_per_unit
      @price = price
      @sale_price = sale_price
      @amount_saved = amount_saved
      @percentage_saved = percentage_saved
      @availability = availability
      @availability_attributes = availability_attributes
      @is_eligible_for_super_saver_shipping = is_eligible_for_super_saver_shipping
      @is_eligible_for_prime_free_digital_video = is_eligible_for_prime_free_digital_video
      @is_eligible_for_prime = is_eligible_for_prime
    end

    # Creates an instance of the object from a hash.
    def self.from_hash(hash)
      return nil unless hash

      # Extract variables from the hash.
      offer_listing_id = hash['OfferListingId']
      price_per_unit = hash['PricePerUnit']
      price = Price.from_hash(hash['Price']) if hash['Price']
      sale_price = Price.from_hash(hash['SalePrice']) if hash['SalePrice']
      amount_saved = Price.from_hash(hash['AmountSaved']) if
        hash['AmountSaved']
      percentage_saved = hash['PercentageSaved']
      availability = hash['Availability']
      availability_attributes = AvailabilityAttributes.from_hash(hash['AvailabilityAttributes']) if
        hash['AvailabilityAttributes']
      is_eligible_for_super_saver_shipping = hash['IsEligibleForSuperSaverShipping']
      is_eligible_for_prime_free_digital_video = hash['IsEligibleForPrimeFreeDigitalVideo']
      is_eligible_for_prime = hash['IsEligibleForPrime']

      # Create object from extracted values.
      OfferListing.new(offer_listing_id,
                       price_per_unit,
                       price,
                       sale_price,
                       amount_saved,
                       percentage_saved,
                       availability,
                       availability_attributes,
                       is_eligible_for_super_saver_shipping,
                       is_eligible_for_prime_free_digital_video,
                       is_eligible_for_prime)
    end
  end
end

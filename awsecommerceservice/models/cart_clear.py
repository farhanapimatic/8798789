# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.cart_clear

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""
import awsecommerceservice.models.cart_clear_request

class CartClear(object):

    """Implementation of the 'CartClear' model.

    TODO: type model description here.

    Attributes:
        marketplace_domain (string): TODO: type description here.
        aws_access_key_id (string): TODO: type description here.
        associate_tag (string): TODO: type description here.
        validate (string): TODO: type description here.
        xml_escaping (string): TODO: type description here.
        shared (CartClearRequest): TODO: type description here.
        request (list of CartClearRequest): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "marketplace_domain" : "MarketplaceDomain",
        "aws_access_key_id" : "AWSAccessKeyId",
        "associate_tag" : "AssociateTag",
        "validate" : "Validate",
        "xml_escaping" : "XMLEscaping",
        "shared" : "Shared",
        "request" : "Request"
    }

    def __init__(self,
                 marketplace_domain=None,
                 aws_access_key_id=None,
                 associate_tag=None,
                 validate=None,
                 xml_escaping=None,
                 shared=None,
                 request=None):
        """Constructor for the CartClear class"""

        # Initialize members of the class
        self.marketplace_domain = marketplace_domain
        self.aws_access_key_id = aws_access_key_id
        self.associate_tag = associate_tag
        self.validate = validate
        self.xml_escaping = xml_escaping
        self.shared = shared
        self.request = request


    @classmethod
    def from_dictionary(cls,
                        dictionary):
        """Creates an instance of this model from a dictionary

        Args:
            dictionary (dictionary): A dictionary representation of the object as
            obtained from the deserialization of the server's response. The keys
            MUST match property names in the API description.

        Returns:
            object: An instance of this structure class.

        """
        if dictionary is None:
            return None

        # Extract variables from the dictionary
        marketplace_domain = dictionary.get("MarketplaceDomain")
        aws_access_key_id = dictionary.get("AWSAccessKeyId")
        associate_tag = dictionary.get("AssociateTag")
        validate = dictionary.get("Validate")
        xml_escaping = dictionary.get("XMLEscaping")
        shared = awsecommerceservice.models.cart_clear_request.CartClearRequest.from_dictionary(dictionary.get("Shared")) if dictionary.get("Shared") else None
        request = None
        if dictionary.get("Request") != None:
            request = list()
            for structure in dictionary.get("Request"):
                request.append(awsecommerceservice.models.cart_clear_request.CartClearRequest.from_dictionary(structure))

        # Return an object of this model
        return cls(marketplace_domain,
                   aws_access_key_id,
                   associate_tag,
                   validate,
                   xml_escaping,
                   shared,
                   request)



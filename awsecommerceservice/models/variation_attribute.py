# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.variation_attribute

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""


class VariationAttribute(object):

    """Implementation of the 'VariationAttribute' model.

    TODO: type model description here.

    Attributes:
        name (string): TODO: type description here.
        value (list of string): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "name" : "Name",
        "value" : "Value"
    }

    def __init__(self,
                 name=None,
                 value=None):
        """Constructor for the VariationAttribute class"""

        # Initialize members of the class
        self.name = name
        self.value = value


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
        name = dictionary.get("Name")
        value = dictionary.get("Value")

        # Return an object of this model
        return cls(name,
                   value)



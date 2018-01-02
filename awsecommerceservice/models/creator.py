# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.creator

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""


class Creator(object):

    """Implementation of the 'Creator' model.

    TODO: type model description here.

    Attributes:
        role (string): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "role" : "Role"
    }

    def __init__(self,
                 role=None):
        """Constructor for the Creator class"""

        # Initialize members of the class
        self.role = role


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
        role = dictionary.get("Role")

        # Return an object of this model
        return cls(role)



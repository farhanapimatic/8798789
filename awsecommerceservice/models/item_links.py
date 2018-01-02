# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.item_links

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""
import awsecommerceservice.models.item_link

class ItemLinks(object):

    """Implementation of the 'ItemLinks' model.

    TODO: type model description here.

    Attributes:
        item_link (list of ItemLink): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "item_link" : "ItemLink"
    }

    def __init__(self,
                 item_link=None):
        """Constructor for the ItemLinks class"""

        # Initialize members of the class
        self.item_link = item_link


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
        item_link = None
        if dictionary.get("ItemLink") != None:
            item_link = list()
            for structure in dictionary.get("ItemLink"):
                item_link.append(awsecommerceservice.models.item_link.ItemLink.from_dictionary(structure))

        # Return an object of this model
        return cls(item_link)



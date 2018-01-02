# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.browse_nodes_243

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""
import awsecommerceservice.models.request_162
import awsecommerceservice.models.browse_node

class BrowseNodes243(object):

    """Implementation of the 'BrowseNodes243' model.

    TODO: type model description here.

    Attributes:
        request (Request162): TODO: type description here.
        browse_node (list of BrowseNode): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "request" : "Request",
        "browse_node" : "BrowseNode"
    }

    def __init__(self,
                 request=None,
                 browse_node=None):
        """Constructor for the BrowseNodes243 class"""

        # Initialize members of the class
        self.request = request
        self.browse_node = browse_node


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
        request = awsecommerceservice.models.request_162.Request162.from_dictionary(dictionary.get("Request")) if dictionary.get("Request") else None
        browse_node = None
        if dictionary.get("BrowseNode") != None:
            browse_node = list()
            for structure in dictionary.get("BrowseNode"):
                browse_node.append(awsecommerceservice.models.browse_node.BrowseNode.from_dictionary(structure))

        # Return an object of this model
        return cls(request,
                   browse_node)



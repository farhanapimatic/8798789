# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.new_releases

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""
import awsecommerceservice.models.new_release

class NewReleases(object):

    """Implementation of the 'NewReleases' model.

    TODO: type model description here.

    Attributes:
        new_release (list of NewRelease): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "new_release" : "NewRelease"
    }

    def __init__(self,
                 new_release=None):
        """Constructor for the NewReleases class"""

        # Initialize members of the class
        self.new_release = new_release


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
        new_release = None
        if dictionary.get("NewRelease") != None:
            new_release = list()
            for structure in dictionary.get("NewRelease"):
                new_release.append(awsecommerceservice.models.new_release.NewRelease.from_dictionary(structure))

        # Return an object of this model
        return cls(new_release)



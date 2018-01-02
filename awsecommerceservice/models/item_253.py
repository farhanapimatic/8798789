# -*- coding: utf-8 -*-

"""
    awsecommerceservice.models.item_253

    This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
"""
import awsecommerceservice.models.errors
import awsecommerceservice.models.item_links
import awsecommerceservice.models.image
import awsecommerceservice.models.image_sets
import awsecommerceservice.models.item_attributes
import awsecommerceservice.models.variation_attributes
import awsecommerceservice.models.related_items
import awsecommerceservice.models.collections
import awsecommerceservice.models.subjects
import awsecommerceservice.models.offer_summary
import awsecommerceservice.models.offers
import awsecommerceservice.models.rental_offers
import awsecommerceservice.models.variation_summary
import awsecommerceservice.models.variations
import awsecommerceservice.models.customer_reviews
import awsecommerceservice.models.editorial_reviews
import awsecommerceservice.models.similar_products
import awsecommerceservice.models.accessories
import awsecommerceservice.models.tracks
import awsecommerceservice.models.browse_nodes_243
import awsecommerceservice.models.alternate_versions

class Item253(object):

    """Implementation of the 'Item253' model.

    TODO: type model description here.

    Attributes:
        asin (string): TODO: type description here.
        parent_asin (string): TODO: type description here.
        errors (Errors): TODO: type description here.
        detail_page_url (string): TODO: type description here.
        item_links (ItemLinks): TODO: type description here.
        sales_rank (string): TODO: type description here.
        small_image (Image): TODO: type description here.
        medium_image (Image): TODO: type description here.
        large_image (Image): TODO: type description here.
        image_sets (list of ImageSets): TODO: type description here.
        item_attributes (ItemAttributes): TODO: type description here.
        variation_attributes (VariationAttributes): TODO: type description
            here.
        related_items (list of RelatedItems): TODO: type description here.
        collections (Collections): TODO: type description here.
        subjects (Subjects): TODO: type description here.
        offer_summary (OfferSummary): TODO: type description here.
        offers (Offers): TODO: type description here.
        rental_offers (RentalOffers): TODO: type description here.
        variation_summary (VariationSummary): TODO: type description here.
        variations (Variations): TODO: type description here.
        customer_reviews (CustomerReviews): TODO: type description here.
        editorial_reviews (EditorialReviews): TODO: type description here.
        similar_products (SimilarProducts): TODO: type description here.
        accessories (Accessories): TODO: type description here.
        tracks (Tracks): TODO: type description here.
        browse_nodes (BrowseNodes243): TODO: type description here.
        alternate_versions (AlternateVersions): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "asin" : "ASIN",
        "parent_asin" : "ParentASIN",
        "errors" : "Errors",
        "detail_page_url" : "DetailPageURL",
        "item_links" : "ItemLinks",
        "sales_rank" : "SalesRank",
        "small_image" : "SmallImage",
        "medium_image" : "MediumImage",
        "large_image" : "LargeImage",
        "image_sets" : "ImageSets",
        "item_attributes" : "ItemAttributes",
        "variation_attributes" : "VariationAttributes",
        "related_items" : "RelatedItems",
        "collections" : "Collections",
        "subjects" : "Subjects",
        "offer_summary" : "OfferSummary",
        "offers" : "Offers",
        "rental_offers" : "RentalOffers",
        "variation_summary" : "VariationSummary",
        "variations" : "Variations",
        "customer_reviews" : "CustomerReviews",
        "editorial_reviews" : "EditorialReviews",
        "similar_products" : "SimilarProducts",
        "accessories" : "Accessories",
        "tracks" : "Tracks",
        "browse_nodes" : "BrowseNodes",
        "alternate_versions" : "AlternateVersions"
    }

    def __init__(self,
                 asin=None,
                 parent_asin=None,
                 errors=None,
                 detail_page_url=None,
                 item_links=None,
                 sales_rank=None,
                 small_image=None,
                 medium_image=None,
                 large_image=None,
                 image_sets=None,
                 item_attributes=None,
                 variation_attributes=None,
                 related_items=None,
                 collections=None,
                 subjects=None,
                 offer_summary=None,
                 offers=None,
                 rental_offers=None,
                 variation_summary=None,
                 variations=None,
                 customer_reviews=None,
                 editorial_reviews=None,
                 similar_products=None,
                 accessories=None,
                 tracks=None,
                 browse_nodes=None,
                 alternate_versions=None):
        """Constructor for the Item253 class"""

        # Initialize members of the class
        self.asin = asin
        self.parent_asin = parent_asin
        self.errors = errors
        self.detail_page_url = detail_page_url
        self.item_links = item_links
        self.sales_rank = sales_rank
        self.small_image = small_image
        self.medium_image = medium_image
        self.large_image = large_image
        self.image_sets = image_sets
        self.item_attributes = item_attributes
        self.variation_attributes = variation_attributes
        self.related_items = related_items
        self.collections = collections
        self.subjects = subjects
        self.offer_summary = offer_summary
        self.offers = offers
        self.rental_offers = rental_offers
        self.variation_summary = variation_summary
        self.variations = variations
        self.customer_reviews = customer_reviews
        self.editorial_reviews = editorial_reviews
        self.similar_products = similar_products
        self.accessories = accessories
        self.tracks = tracks
        self.browse_nodes = browse_nodes
        self.alternate_versions = alternate_versions


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
        asin = dictionary.get("ASIN")
        parent_asin = dictionary.get("ParentASIN")
        errors = awsecommerceservice.models.errors.Errors.from_dictionary(dictionary.get("Errors")) if dictionary.get("Errors") else None
        detail_page_url = dictionary.get("DetailPageURL")
        item_links = awsecommerceservice.models.item_links.ItemLinks.from_dictionary(dictionary.get("ItemLinks")) if dictionary.get("ItemLinks") else None
        sales_rank = dictionary.get("SalesRank")
        small_image = awsecommerceservice.models.image.Image.from_dictionary(dictionary.get("SmallImage")) if dictionary.get("SmallImage") else None
        medium_image = awsecommerceservice.models.image.Image.from_dictionary(dictionary.get("MediumImage")) if dictionary.get("MediumImage") else None
        large_image = awsecommerceservice.models.image.Image.from_dictionary(dictionary.get("LargeImage")) if dictionary.get("LargeImage") else None
        image_sets = None
        if dictionary.get("ImageSets") != None:
            image_sets = list()
            for structure in dictionary.get("ImageSets"):
                image_sets.append(awsecommerceservice.models.image_sets.ImageSets.from_dictionary(structure))
        item_attributes = awsecommerceservice.models.item_attributes.ItemAttributes.from_dictionary(dictionary.get("ItemAttributes")) if dictionary.get("ItemAttributes") else None
        variation_attributes = awsecommerceservice.models.variation_attributes.VariationAttributes.from_dictionary(dictionary.get("VariationAttributes")) if dictionary.get("VariationAttributes") else None
        related_items = None
        if dictionary.get("RelatedItems") != None:
            related_items = list()
            for structure in dictionary.get("RelatedItems"):
                related_items.append(awsecommerceservice.models.related_items.RelatedItems.from_dictionary(structure))
        collections = awsecommerceservice.models.collections.Collections.from_dictionary(dictionary.get("Collections")) if dictionary.get("Collections") else None
        subjects = awsecommerceservice.models.subjects.Subjects.from_dictionary(dictionary.get("Subjects")) if dictionary.get("Subjects") else None
        offer_summary = awsecommerceservice.models.offer_summary.OfferSummary.from_dictionary(dictionary.get("OfferSummary")) if dictionary.get("OfferSummary") else None
        offers = awsecommerceservice.models.offers.Offers.from_dictionary(dictionary.get("Offers")) if dictionary.get("Offers") else None
        rental_offers = awsecommerceservice.models.rental_offers.RentalOffers.from_dictionary(dictionary.get("RentalOffers")) if dictionary.get("RentalOffers") else None
        variation_summary = awsecommerceservice.models.variation_summary.VariationSummary.from_dictionary(dictionary.get("VariationSummary")) if dictionary.get("VariationSummary") else None
        variations = awsecommerceservice.models.variations.Variations.from_dictionary(dictionary.get("Variations")) if dictionary.get("Variations") else None
        customer_reviews = awsecommerceservice.models.customer_reviews.CustomerReviews.from_dictionary(dictionary.get("CustomerReviews")) if dictionary.get("CustomerReviews") else None
        editorial_reviews = awsecommerceservice.models.editorial_reviews.EditorialReviews.from_dictionary(dictionary.get("EditorialReviews")) if dictionary.get("EditorialReviews") else None
        similar_products = awsecommerceservice.models.similar_products.SimilarProducts.from_dictionary(dictionary.get("SimilarProducts")) if dictionary.get("SimilarProducts") else None
        accessories = awsecommerceservice.models.accessories.Accessories.from_dictionary(dictionary.get("Accessories")) if dictionary.get("Accessories") else None
        tracks = awsecommerceservice.models.tracks.Tracks.from_dictionary(dictionary.get("Tracks")) if dictionary.get("Tracks") else None
        browse_nodes = awsecommerceservice.models.browse_nodes_243.BrowseNodes243.from_dictionary(dictionary.get("BrowseNodes")) if dictionary.get("BrowseNodes") else None
        alternate_versions = awsecommerceservice.models.alternate_versions.AlternateVersions.from_dictionary(dictionary.get("AlternateVersions")) if dictionary.get("AlternateVersions") else None

        # Return an object of this model
        return cls(asin,
                   parent_asin,
                   errors,
                   detail_page_url,
                   item_links,
                   sales_rank,
                   small_image,
                   medium_image,
                   large_image,
                   image_sets,
                   item_attributes,
                   variation_attributes,
                   related_items,
                   collections,
                   subjects,
                   offer_summary,
                   offers,
                   rental_offers,
                   variation_summary,
                   variations,
                   customer_reviews,
                   editorial_reviews,
                   similar_products,
                   accessories,
                   tracks,
                   browse_nodes,
                   alternate_versions)



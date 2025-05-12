import React from "react";
import React, { useState } from "react";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src="data:image/png;base64,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" alt="Logo" className="logo" />
          <h1 className="site-title">Sweet 🍒</h1>
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};





const ReasturentCrad = (props) =>
{
   const {resData} = props;
  
  return (
    <div className="res-card">
      <img className="res-logo" 
        alt="logo"

      src= {
        "https://media-assets.swiggy.com/swiggy/image/upload/" 
         + resData.info.cloudinaryImageId  
      }

      />
      <div className="res-card-content">
        <h3>{resData.info.name}</h3> 
        <p>{resData.info.locality }</p>
        <p>{resData.info.costForTwo }</p>

        <p>{resData.info.cuisines.join(",") }</p>
        <p>{resData.info.veg }</p>
<p>{resData.info.avgRatingString} {"⭐".repeat(Number(resData.info.avgRatingString))}</p>

    </div>
    </div>
  )
}

const resObj = [
   {
                    "info": {
                      "id": "151518",
                      "name": "Bakery World",
                      "cloudinaryImageId": "mt2aggiscfl3yviatwng",
                      "locality": "Parasia Road",
                      "areaName": "Parasia Road",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Ice Cream",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "40363",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "262",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 14.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "14.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151649",
                      "name": "Hotel Sai Nath & Sai Restaurant",
                      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
                      "locality": "railway station",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "101802",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "234875",
                      "name": "Adil Hotel",
                      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                      "locality": "Rautha Wada",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4.3,
                      "parentId": "27123",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 11.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "11.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-13 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "658210",
                      "name": "The Fusion Lounge",
                      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                      "locality": "Triloki nagar",
                      "areaName": "Railway Station",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "395453",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "342",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 11.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "11.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "625927",
                      "name": "Kathi Junction",
                      "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
                      "locality": "Bunglow Madhuvan Colony",
                      "areaName": "Prasia Road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "rolls",
                        "Burgers",
                        "Pizzas",
                        "Fast Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "1935",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "363",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 11,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "150591",
                      "name": "Satkar Restaurant",
                      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
                      "locality": "Sinchai Colony",
                      "areaName": "Satkar Chowk",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Indian",
                        "Salads",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "21553",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 13.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "13.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "151515",
                      "name": "Gupta Bhojnalay",
                      "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
                      "locality": "fulwara chowk",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Fast Food",
                        "Indian",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "91635",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "447",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "385824",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                      "locality": "Sinchai Colony",
                      "areaName": "Mohan Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "307",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 13.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "13.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "184424",
                      "name": "Sab Ghar Tak Foods",
                      "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
                      "locality": "Sanchar Colony",
                      "areaName": "Parsia Road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "173932",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "614",
                      "sla": {
                        "deliveryTime": 47,
                        "lastMileTravel": 11.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-12 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3c5be046-6bb1-4f05-a2fd-d64d47267501"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
                      "type": "WEBLINK"
                    }
                  }
];









const Body = () =>{
  return(
       <div className="body">
        <div className="search"> Search </div>
        <div className="res-contener">
          


          // use key with map and map use for when multipel data wants to render 
          // key use to put the new element into the excat place 
         {
            resObj.map((resturent) => (
              <ReasturentCrad key={resturent.info.id} resData = {resturent} />
            ))
         }
                   
         


        </div>
       </div>
  );
};




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;







 {/* react.createElement */}
     
//  const heading = React.createElement(
//   "h1",
//   { id : "head"},
//   "SAYAK DAS 😎🎉"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


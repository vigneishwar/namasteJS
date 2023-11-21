import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   const restaurantData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //   setListOfRestaurants(restaurantData);
  // }; 

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // checking for the response.
      // returns error if there is http error
      if(!response.ok) {
        throw new Error(`HTTP ERROR! status :${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      // looping through the entire json array to see for the restaurants
      // setting the restaurantData to null and saving the response if the restaurants are found 
      let restaurantData = null;
      // looping through the json data or if it is null
      for (const resCards of json?.data?.cards || []) {
        if(resCards?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurantData = resCards.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }
      if(restaurantData) {
        setListOfRestaurants(restaurantData);
      } else{
        console.log("Data not found");
      }
    } catch(error) {
      console.error("Error in fetching data: ", error);
    }
  };

  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }
    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          const filteredLists = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setListOfRestaurants(filteredLists);
        }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="res-container">
          {console.log(listOfRestaurants)}
          {listOfRestaurants?.map((restaurant, index) => (
            <RestaurantCard key = {index} resData={restaurant} />
          ))}
          
        </div>
      </div>
    );
    
  };
  

  export default Body;
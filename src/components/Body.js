import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurantData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurantData);
  }; 

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
    return (
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
          {listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard key = {index} resData={restaurant} />
          ))}
          
        </div>
      </div>
    );
    
  };
  

  export default Body;
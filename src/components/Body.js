import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantLists);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

  }; 
    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          const filteredLists = listOfRestaurants.restaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurants({restaurants: filteredLists});
        }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.restaurants.map((restaurant, index) => (
            <RestaurantCard key = {index} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
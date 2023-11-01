import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantLists);
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
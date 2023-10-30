import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {restaurantLists.restaurants.map((restaurant, index) => (
            <RestaurantCard key = {index} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
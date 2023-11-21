import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0); // to track which page of data to load

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    fetchData(); // Initial fetch
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading) fetchData(); // Fetch more data when isLoading is false
  }, [page]); // Effect to run whenever the page number changes

//   // const fetchData = async () => {
//   //   const data = await fetch(
//   //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   //   );
//   //   const json = await data.json();
//   //   console.log(json);
//   //   const restaurantData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//   //   setListOfRestaurants(restaurantData);
//   // }; 
  const fetchData = async () => {
    setIsLoading(true); // Set loading state to prevent multiple calls
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?page=${page}&lat=13.0849557&lng=80.2101342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
       // checking for the response.
      // returns error if there is http error
      if (!response.ok) {
        throw new Error(`HTTP ERROR! status: ${response.status}`);
      }
      const json = await response.json();
      // looping through the entire json array to see for the restaurants
      // setting the restaurantData to null and saving the response if the restaurants are found
      let restaurantData = null;
      // looping through the json data or if it is null
      for (const resCards of json?.data?.cards || []) {
        if (resCards?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurantData = resCards.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }
      if (restaurantData) {
        setListOfRestaurants(prev => [...prev, ...restaurantData]);
        setPage(prevPage => prevPage + 1); // Increment page number for next API call
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.error("Error in fetching data: ", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
      setPage(prevPage => prevPage + 1); // Update page state to trigger useEffect
    }
  };

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
          <RestaurantCard key={index} resData={restaurant} />
        ))}
        {isLoading && <Shimmer />}
      </div>
    </div>
  );
};

export default Body;

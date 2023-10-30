import CDN_URL from "../../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
  
    const {
      name, 
      cuisines, 
      costForTwo, 
      avgRating, 
      totalRatingsString, 
      areaName, 
      cloudinaryImageId,
    } = info;
    return (
      <div className="res-card">
        <img className ="res-logo" alt="res-logo" src={ 
        CDN_URL + cloudinaryImageId 
      } 
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} out of {totalRatingsString} reviews</h4>
        <h4>{areaName}</h4>
      </div>
    );
  };

  export default RestaurantCard;
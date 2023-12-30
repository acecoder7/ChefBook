import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./Recipe.css";

const Recipe = (props) => {
  const [stars, setStars] = useState(Array(5).fill({ color: "white" }));
  const [showMoreHealth, setShowMoreHealth] = useState(false);
  const [showMoreTags, setShowMoreTags] = useState(false);


  const handleStarClick = (index) => {
    const updatedStars = stars.map((star, i) => ({
      color: i <= index ? "yellow" : "white",
    }));
    setStars(updatedStars);
  };

  const handleShowMoreHealth = () => {
    setShowMoreHealth(!showMoreHealth);
  };

  const handleShowMoreTags = () => {
    setShowMoreTags(!showMoreTags);
  };

  return (
    <>
      <div className="card my-4 mx-3" style={{ ...props.cardStyle, width: "350px" }}>
        <img
          src={props.img}
          style={{ ...props.imageStyle, height: "227px", objectFit: "cover" }}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <div style={{ height: "70px" }} >
            <h5 className="card-title">
            {props.title}
            </h5>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr className="tablerow" >
                  <td className="tablerow-comp">Calories</td>
                  <td>{Math.floor(props.calories) || "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Diet</td>
                  <td>{props.diet && props.diet.length > 0 ? props.diet.slice(0, 3).join(", ") : "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Cuisine Type</td>
                  <td>{props.cuisineType && props.cuisineType.length > 0 ? props.cuisineType.slice(0, 3).join(", ") : "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Meal Type</td>
                  <td>{props.mealType && props.mealType.length > 0 ? props.mealType.slice(0, 3).join(", ") : "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Dish Type</td>
                  <td>{props.dishType && props.dishType.length > 0 ? props.dishType.slice(0, 3).join(", ") : "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Total Time</td>
                  <td>{props.time > 0 ? `${props.time} minutes` : "NA"}</td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Health Labels</td>
                  <td>
                    {props.health && props.health.length > 0 ? (
                      <>
                        {showMoreHealth ? props.health.join(", ") : props.health.slice(0, 3).join(", ")}
                        {props.health.length > 3 && (
                          <button className="btn btn-link btn-sm morebtn " onClick={handleShowMoreHealth} >
                            {showMoreHealth ? "Show Less" : <FontAwesomeIcon icon={faPlus} style={{ color: "#FFB534", fontSize: "7px" }}/>}
                          </button>
                        )}
                      </>
                    ) : "NA"}
                  </td>
                </tr>
                <tr className="tablerow">
                  <td className="tablerow-comp">Tags</td>
                  <td>
                    {props.tags && props.tags.length > 0 ? (
                      <>
                        {showMoreTags ? props.tags.join(", ") : props.tags.slice(0, 3).join(", ")}
                        {props.tags.length > 3 && (
                          <button className="btn btn-link btn-sm morebtn" onClick={handleShowMoreTags}>
                            {showMoreTags ? "Show Less" : <FontAwesomeIcon icon={faPlus} style={{ color: "#FFB534", fontSize: "7px" }} />}
                          </button>
                        )}
                      </>
                    ) : "NA"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          

          <p className="inged-title">Ingredients</p>
          <ol className="inged-comp">
            {props.ingredients.map((ingredient, index) => (
              <li key={index} style={props.myStyle}>
                {ingredient.text}
              </li>
            ))}
          </ol>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary see-recipe-btn"
            style={{ marginBottom: "10px" }}
          >
            See the recipe
          </a>
          <div className="stars">
            {stars.map((star, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="star"
                style={{ ...star, margin: 3 }}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;

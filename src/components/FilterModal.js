import React from "react";
import "./FilterModal.css"; 


const FilterModal = ({ isOpen, onClose, onFilterApply }) => {
  const diet = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];

  const health = [
    "alcohol-cocktail",
    "alcohol-free",
    "celery-free",
    "dairy-free",
    "crustacean-free",
    "DASH",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-fat-abs",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mollusk-free",
    "mustard-free",
    "no-oil-added",
    "paleo",
    "peanut-free",
    "pascatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free"
  ];

  const cuisineType = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
  ];

  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const dishType = [
    "biscuits and cookies",
    "bread",
    "cereals",
    "condiments and sauces",
    "Desserts",
    "Drinks",
    "Main course",
    "Pancake",
    "Preps",
    "preserve",
    "Salad",
    "Sandwiches",
    "Side dish",
    "Soup",
    "Starter",
    "Sweets"    
  ];

  const handleApplyFilters = () => {
    // Combine selected values from all filters and pass them to the parent component
    const selectedFilters = {
      diet: diet.filter((label) => document.getElementById(`diet-${label}`).checked),
      health: health.filter((label) => document.getElementById(`health-${label}`).checked),
      cuisineType: cuisineType.filter((type) => document.getElementById(`cuisineType-${type}`).checked),
      mealType: mealType.filter((type) => document.getElementById(`mealType-${type}`).checked),
      dishType: dishType.filter((type) => document.getElementById(`dishType-${type}`).checked),
    };

    onFilterApply(selectedFilters);
  };

    return (
       <>
      {isOpen && (<div className="overlay" onClick={onClose}></div>)}
      <div className={`filter-modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
            {/* Diet Labels */}
            <div className="filter-section">
                <h3>Diet Labels</h3>
                <div className="checkbox-container">
              {diet.map((label) => (
                <label key={label}>
                  <input type="checkbox" id={`diet-${label}`} />
                  {label}
                </label>
              ))}
                  </div>
            </div>

            <hr className="separator" />
                        
            {/* Meal Types */}
            <div className="filter-section">
              <h3>Meal Types</h3>
              <div className="checkbox-container">
              {mealType.map((type) => (
                <label key={type}>
                  <input type="checkbox" id={`mealType-${type}`} />
                  {type}
                </label>
              ))}
            </div>
            </div>

            <hr className="separator" />

            {/* Health Labels */}
            <div className="filter-section">
              <h3>Health Labels</h3>
              <div className="checkbox-container">
              {health.map((label) => (
                <label key={label}>
                  <input type="checkbox" id={`health-${label}`} />
                  {label}
                </label>
              ))}
            </div>
            </div>

            <hr className="separator" />
                        
            {/* Cuisine Types */}
            <div className="filter-section">
              <h3>Cuisine Types</h3>
              <div className="checkbox-container">
              {cuisineType.map((type) => (
                <label key={type}>
                  <input type="checkbox" id={`cuisineType-${type}`} />
                  {type}
                </label>
              ))}
            </div>
            </div>

            <hr className="separator" />

            {/* Dish Types */}
            <div className="filter-section">
              <h3>Dish Types</h3>
              <div className="checkbox-container">
              {dishType.map((type) => (
                <label key={type}>
                  <input type="checkbox" id={`dishType-${type}`} />
                  {type}
                </label>
              ))}
              </div>
              </div>

          {/* Apply and Close buttons */}
          <div className="buttons-container">
            <button onClick={handleApplyFilters}>Apply Filters</button>
            <button className="modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;

import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";
import Navbar from "../components/Navbar";
import mainLogo from "../components/icon.png";
import "../App.css";

export default function Home() {
  const [visible, setVisible] = useState(3);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("bread");
  const [mode, setMode] = useState("light");

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const APP_ID = "d7811cd0";
  const APP_KEY = "3baec572c48af715772e8deac52d7572";

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.hits);
        //console.log(data);
      });
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const [myStyle, setStyle] = useState({
    color: "rgb(242, 198, 140)",
  });
  const [cardStyle, setCard] = useState({
    display: "inline-block",
    width: 300,
    marginLeft: 100,
    marginTop: 5,
    marginRight: 5,
    backgroundColor: "#4e6c50",
  });
  /*const[imageStyle,setImage]=useState({
    height:200
    

    
  })*/
  const toggleMode = () => {
    const isLightMode = mode === "light";
    setMode(isLightMode ? "dark" : "light");

    document.querySelector(".App").style.backgroundImage = isLightMode
      ? "radial-gradient(black,black,black)"
      : "linear-gradient(to right, #aa8b56 0%, #f0ebce 100%)";
    };
    

    return (
      <>
        <div className="App">
          <div className={`App ${mode === "light" ? "light-mode" : "dark-mode"}`}>
        <Navbar />
          <img
            alt=""
            src={mainLogo}
            width="100"
            height="100"
            className="logo"
            text-align="center"
          />
          <h1 className="heading" style={myStyle}>
            Tasty Tips
          </h1>
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(e.target.value);
                  // console.log("search: ", e.target.value)
                }
              }}
            ></input>
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>

          <div class="form-check form-switch">
            <input
              class="form-check-input ms-5"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            ></input>
          </div>
          <div className="container">
            {recipes.slice(0, visible).map((r) => (
              <Recipe
                key={r.recipe.url}
                title={r.recipe.label}
                calories={r.recipe.calories}
                img={r.recipe.images.REGULAR.url}
                url={r.recipe.url}
                ingredients={r.recipe.ingredients}
                diet={r.recipe.dietLabels}
                health={r.recipe.healthLabels}
                cuisineType={r.recipe.cuisineType}
                mealType={r.recipe.mealType}
                dishType={r.recipe.dishType}
                time={r.recipe.totalTime}
                tags={r.recipe.tags}
                myStyle={myStyle}
                cardStyle={cardStyle}
              />
            ))}
          </div>
          <div className="button-container">
            <button className="loadMoreButton" onClick={showMoreItems}>
              Load More Recipes
            </button>
            </div>
          </div>
        </div>
        </>
    )
}
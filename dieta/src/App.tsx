import { useContext } from "react";
import "./App.css";
import { Header, Meal } from "./components";
import { AppContext } from "./context/AppContext";
import { MealType } from "./types";

function renderMeals(meals: MealType[]) {
  return meals.map((meal) =>
    meal?.type === "separator" ? (
      <section className="separator" />
    ) : (
      <Meal key={meal.name} meal={meal} />
    )
  );
}

function App() {
  const appData = useContext(AppContext);

  if (!appData) {
    return <div>NO PERSON FOUND</div>;
  }

  return (
    <div className="main">
      <Header />
      {renderMeals(appData.meals)}
    </div>
  );
}

export default App;

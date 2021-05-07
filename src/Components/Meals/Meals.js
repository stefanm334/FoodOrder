import MealsSummary from "./MealsSummary";
import AvaildableMeals from "./AvaildableMeals";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvaildableMeals />
    </React.Fragment>
  );
};

export default Meals;

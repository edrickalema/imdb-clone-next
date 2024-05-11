import React from "react";
import DrinkList from "../components/Navbar/DrinkList";

// Drinks URL;
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const GetDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not find any Drinks");
  const data = response.json();
  return data;
};
const DrinksPage = async () => {
  const data = await GetDrinks();

  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;

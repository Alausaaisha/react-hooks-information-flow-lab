import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  function handleDarkModeClick(childClick) {
    childClick = !isClicked;
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setIsClicked((isClicked) => childClick);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
      <Header click={isClicked} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import itemData from "../data/items";

import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
        onDarkModeClick={handleDarkModeClick}
        isDarkMode={isDarkMode}
      />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

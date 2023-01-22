import React from "react";

function CategoryFilter({ checkButton, selected, categories }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {categories && categories.map((item) => (
        <button
          className={checkButton === item ? 'selected' : null}
          key={item}
          onClick={() => { selected(item) }}

        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

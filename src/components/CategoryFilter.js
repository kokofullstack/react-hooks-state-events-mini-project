import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

// export default CategoryFilter;

// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;

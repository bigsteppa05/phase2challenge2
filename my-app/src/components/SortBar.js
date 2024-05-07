import React from 'react';

function SortBar({ onSortBy }) {
  return (
    <div>
      <label>Sort by: </label>
      <select onChange={(e) => onSortBy(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
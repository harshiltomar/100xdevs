import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, SetDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      SetDebounceValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debounceValue;
};

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 500);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchBar;

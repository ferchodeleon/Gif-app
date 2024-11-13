import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({
  // setCategories
  onNewCategory,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form aria-label="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propType = {
  onNewCategory: PropTypes.func.isRequired,
};

import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [field, setField] = useState({
    text: '',
    category: ''
  })

  function handleChange(e) {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setField({ ...field, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(field)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input value={field.text} type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category !== "All")
              return (<option value={category} key={category}>{category}</option>)
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

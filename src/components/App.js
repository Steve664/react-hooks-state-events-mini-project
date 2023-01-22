import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)

  const [checkedCategory, setCheckedCategory] = useState("All")

  function onTaskFormSubmit(newtask) {
    setTasks([...tasks, newtask])
  }



  function handleDelete(text) {
    setTasks(tasks.filter((item) => item.text !== text))
  }

  function filtered(checkedCategory) {
    return tasks.filter((item) => checkedCategory === 'All' ? 'All' : checkedCategory === item.category)
  }

  const filteredTasks = filtered(checkedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={category}
        checkButton={checkedCategory}
        selected={setCheckedCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={category}

      />
      <TaskList handleDelete={handleDelete} tasks={filteredTasks} />
    </div>
  );
}

export default App;

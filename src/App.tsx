import { TaskType, TodoList } from './TodoList';
import { useState } from 'react';
export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  const [tasks, setTasks] = useState <Array <TaskType> >([
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>('completed');

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  let tasksForTodoList = tasks;

  if (filter === 'completed') {
    tasksForTodoList = tasks.filter((todo) => todo.isDone === true);
  }

  if (filter === 'active') {
    tasksForTodoList = tasks.filter((todo) => todo.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        title="Hurma"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;

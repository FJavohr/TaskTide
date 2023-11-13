import React from 'react';
import { FilterValuesType } from './App';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodoListType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: number) => void;
  changeFilter: (value: FilterValuesType) => void
};

export const TodoList = (props: TodoListType) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
        <ul>
          {props.tasks.map((task) => {
            return (
              <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button
                  onClick={() => {
                    props.removeTask(task.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
          <div>
            <button
              onClick={() => {
                props.changeFilter('all');
              }}
            >
              button - 1 All
            </button>
            <button onClick={() => { props.changeFilter("active") } } >button - 2 Active</button>
            <button onClick={() => { props.changeFilter("completed") }} >button - 3 Completed </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

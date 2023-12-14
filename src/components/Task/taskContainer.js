import React, { useState, useEffect } from "react";

import TaskCreator from "./taskCreator.js";
import TaskList from "./taskList.js";

import '../../style/taskSection.css';

export default function TaskContainer() {
    // useState allows updates to the tasks array via setTasks
    // the array holds all the added tasks of the current session, starts as empty array
    let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('taskList')) || []);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(tasks));
    }, [tasks]);


    // createTask is a function to add a new task to tasks, given a taskTitle
    // not called here because of the tasks array intended scope
    // a single task contains a unique id, the title and checkbox state
    function createTask(taskTitle) {
        setTasks([...tasks, {
            id: tasks.length,
            title: taskTitle,
            checked: false
        }]);
    }

    // deleteTask receives the task object from the card the pressed button belongs to
    // it creates a copy of the tasks array, filtering out the element with the provided id
    // before overwriting the tasks array, it reassigns the ids to avoid key conflicts
    function deleteTask(task) {
        let newTasks = tasks.filter(t => t.id !== task.id);
        newTasks.map((t, index) => t.id = index);
        setTasks(newTasks);
    }

    // the createTask function gets passed to TaskCreator to receive the taskTitle from the input
    // stored tasks are sent to tasklist to be displayed
    // deleteTask gets passed to every TaskCard to handle each removal
    return (
        <div id="task-container">
            <TaskList deleteTask={deleteTask} tasks={tasks} />
            <TaskCreator createTask={createTask} />
        </div>
    );
}
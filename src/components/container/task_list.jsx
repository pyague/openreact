import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm';

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3 ', 'Description 3', false, LEVELS.BLOCKING)
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);
    
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount(desaparecer)...')
        };
    }, [tasks]);
    
    function completeTask(task){
        console.log('Complete this task:', task);
        const index = tasks.indexOf(task) //Para sacar el indice de la task
        const tempTasks = [...tasks] //copia el array en una variable temporal
        tempTasks[index].completed = !tempTasks[index].completed;
        // *We update the state of the component and it will update the 
        // *iteration of the tasks in order to show the task updated
        setTasks(tempTasks); //le pasamos la nueva lista actualizada

    }

    function deleteTask(task){
        console.log('Delete this task:', task);
        const index = tasks.indexOf(task) //Para sacar el indice de la task
        const tempTasks = [...tasks] //copia el array en una variable temporal
        tempTasks.splice(index, 1); // El splice coje el indice y el numero de items que borra
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this task:', task);
        const index = tasks.indexOf(task) //Para sacar el indice de la task
        const tempTasks = [...tasks] //copia el array en una variable temporal
        tempTasks.push(task);
        setTasks(tempTasks)
    }

    return (
        <div>
            <div className= 'col-12'>
                <div clasName= 'card'>
                    <div className='card-header p-3'>
                        <h5>
                        Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return(
                                        <TaskComponent 
                                        key={index} 
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}>   
                                        </TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Taskform add={addTask}></Taskform>
        </div>
    );
};


export default TaskListComponent;

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
    
    const changeCompleted = (id) => {
        console.log('To do: cambiar estado de una tarea')
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
                                        task={task}>   
                                        </TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <Taskform></Taskform>
                </div>
                
            </div>
            {/*Aplicar un For/.map para renderizar una lista de tareas */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;

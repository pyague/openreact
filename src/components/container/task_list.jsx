import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
    
    //Estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        return () => {
            console.log('TaskList component is going to unmount(desaparecer)...')
        };
    }, [tasks]);
    
    const changeCompleted = (id) => {
        console.log('To do: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks</h1>
            </div>
            {/*Aplicar un For/.map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;

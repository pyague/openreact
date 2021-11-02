import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Importamos hoja de estilo de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {
    
    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        }
    }, [task])
    
    /*
     * Function that returns a Badge
    * depending on the level of the task
    */
    function taskLevelBudge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>
                )
            default:
                break;
        }
    }

    /*
    * Function that returns icon depending on completion of the task
    *
     */
    function taskCompletedIcon(){
        if(task.completed){
            <i className='bi-toggle-on' style={{color:'green'}}></i>
        }else{
            <i className='bi-toggle-off'style={{color:'grey'}}></i>
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element*/}
                {taskLevelBudge()}
            </td>
            <td className='align-middle'>
                {task.completed
                ?(<i onClick={ ()=>complete(task) } className='bi-toggle-on task-action' style={ {color:'green'} }></i>)
                :( <i onClick={ ()=>complete(task) } className='bi-toggle-off task-action'style={ {color:'grey'} }></i>)
                }
                <i onClick={ ()=>remove(task) } className='bi-trash task-action' style={ {color:'tomato'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired, //esto obliga a que este props sea obligatorio
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

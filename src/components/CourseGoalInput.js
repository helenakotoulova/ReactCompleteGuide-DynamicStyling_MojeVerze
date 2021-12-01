import {useState} from 'react';
import classes from './CourseGoalInput.module.css';

function CourseGoalInput(props) {

    function submitHandler(event) {
        event.preventDefault();
        const goal = {
            id: Math.random(),
            nazev: newGoal
        }
        props.onAddNewGoal(goal)
    }

    const [newGoal,setNewGoal] = useState('');

    function addGoalHandler(event) {
        setNewGoal(event.target.value)
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label>Add course goal:</label>
            <input type='text' onChange={addGoalHandler}/>
            <div className={classes.actions}>
                <button type='submit'>Add goal</button>
            </div>
        </form>
    )
}

export default CourseGoalInput;
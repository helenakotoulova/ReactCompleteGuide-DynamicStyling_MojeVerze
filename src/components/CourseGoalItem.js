import classes from './CourseGoalItem.module.css';

function CourseGoalItem(props) {

    function deleteHandler() {
        props.onDelete(props.id); // v tomhle byl problem. to id se musi tahat odsud.
        // ja tady mela jen props.onDelete()
        // a v CourseGoalList.js props.deleteHandler(goal.id)
    }
    
    return(
        <li className={classes.polozka} onClick={deleteHandler}>
            {props.nazev} 
        </li>
    )
}

export default CourseGoalItem;

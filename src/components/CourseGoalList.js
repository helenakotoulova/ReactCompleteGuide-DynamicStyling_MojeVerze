import CourseGoalItem from "./CourseGoalItem";
import classes from "./CourseGoalList.module.css";

function CourseGoalList(props) {
  return (
    <ul className={classes.list}>
      {props.goals.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.deleteHandler}
          nazev={goal.nazev}
        />
      ))}
    </ul>
  );
}
export default CourseGoalList;

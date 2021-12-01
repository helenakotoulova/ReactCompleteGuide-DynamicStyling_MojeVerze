import CourseGoalList from "./components/CourseGoalList";
import CourseGoalInput from "./components/CourseGoalInput";
import Card from './ui/Card';
import {useState} from 'react';

function App() {
  const goals = [
    {id: 1, nazev: 'Learn React'},
    {id: 2, nazev: 'DP'}
  ]

  const [courseGoals,setCourseGoals]=useState(goals);

  function addNewGoalHandler(goal) {
      setCourseGoals((prevGoals)=> [goal, ...prevGoals])
  }


  function deleteHandler(goalID) {
    setCourseGoals((prevGoals) => (prevGoals.filter(goal=>goal.id!==goalID)))
    }

  return (
    <Card>
      <h1>Course goals</h1>
      <CourseGoalInput onAddNewGoal={addNewGoalHandler} />
      <CourseGoalList goals={courseGoals} deleteHandler={deleteHandler}/>
    </Card>
  );
}

export default App;


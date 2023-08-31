import { useState } from 'react';
import TodoForm from "./TodoForm.jsx"
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import styles from './TodoCreate.module.scss';

/*
CC-1 Condition Rendering
-Default : Show


CC-2 Event Handing
take function to contact UI for user who call by himself
- onClick: click induce function do function will run
step
1. user click
2. browser call for run function
   handleClick (evenObject)

CC3 - JS Value can not dinduce React (Render)

CC4 - Array Destructuring
function myUseState(){
  return [5,9]
}
let [a,b] = myUseState()
a == 5
b == 9

CC5 - React State (1 in Function React Hook group)
   const [state,setState] =] useState(intialState:any)
    element 1 ; current State
    element 2 ; Fn for SettState
  
*/

// #1 : FC Function Component (Render)


function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false)
  console.log(isOpenForm);
  let active = true;
  //#2 : JS Function (logic)
  const handleClick = function (event) {
    console.log('clicked');
    setIsOpenForm(!isOpenForm);
    // active = !active;
    // console.log('clicked', active)
  };


  return (
    <>
      {isOpenForm ? (
        <TodoForm />) : (<div className={styles.todo__create}
          onClick={handleClick}
        >
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>)}
    </>
  );
}

export default TodoCreate;

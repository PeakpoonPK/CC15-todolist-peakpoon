import { useState } from 'react';
import TodoForm from "./TodoForm.jsx"
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import styles from './TodoCreate.module.scss';
import TodoLists from './TodoLists.jsx';

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
    when state is changed, Function component will new render
    render == all code in Function will run agian 1 time   

*/

// #1 : FC Function Component (Render)


function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false)
  console.log('render', 'rerender');
  let active = true;
  const handleClick = function (event) {
    console.log('clicked');
    setIsOpenForm(!isOpenForm);

  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit='Add Task'
          setIsOpenForm={setIsOpenForm}
        />) : (<div className={styles.todo__create}
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

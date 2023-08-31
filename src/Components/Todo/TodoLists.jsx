import styles from './TodoLists.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';
import TodoItem from './TodoItem'



function TodoLists() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = function (event) {
    // console.log('clicked');
    setIsOpenForm(!isOpenForm);
  };


  return (
    <ul className={styles.todo__lists}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul >
  );
}

export default TodoLists;

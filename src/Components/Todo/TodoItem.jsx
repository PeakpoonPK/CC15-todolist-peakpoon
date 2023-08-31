import styles from './TodoLists.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';

import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function TodoItem({ task, done, date }) {
    const [isOpenForm, setIsOpenForm] = useState(false);
    // const {  } = props;
    const handleClick = function () {

        setIsOpenForm(!isOpenForm);
    };
    return (
        <>{
            isOpenForm ? (
                <TodoForm textSubmit='Edit Task' setIsOpenForm={setIsOpenForm} />) :

                (<li className={styles.todo} >

                    <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
                        {/* <div className={styles.todo__checkbox}> */}
                        <HiOutlineCheck className={styles.todo__checkbox__icon} />
                    </div>
                    {/* <p className={styles.todo__task} >todo-item 1 </p> */}
                    <p className={`${styles.todo__task} ${styles.todo__task__done}`}> {task} </p>
                    <span className={styles.todo__date}>{date}</span>
                    <div className={styles.todo__action}>
                        <span>
                            <FaPen className={styles.todo__edit} onClick={handleClick} />
                        </span>
                        <span>
                            <FaTrashAlt className={styles.todo__delete} />
                        </span>
                    </div>
                </li >)}</>)
}

export default TodoItem;
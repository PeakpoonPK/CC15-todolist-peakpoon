import style from './TodoLists.module.scss'
import { FaTrash, FaPen, FaRegCircle } from 'react-icons/fa';

function TodoList() {
    return (
        <ul className={style}>
            <li className={style.todo}>
                <span className={style.todo__checkbox}>
                </span>
                <p className={style.todo__task}>TodoItem 1</p>
                <span className={style.todo__date}>30 AUG</span>
                <div className={style.todo__action}>
                    <span className={style.todo__edit}>
                        <FaPen />
                    </span>
                    <span className={style.todo__delete}>
                        <FaTrash />
                    </span>
                </div>
            </li>
        </ul>
    );
}
export default TodoList
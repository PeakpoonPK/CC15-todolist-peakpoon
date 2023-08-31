import styles from './TodoForm.module.scss';
import { Button } from '../Common/Button/Button'
import { useState } from 'react';
/*
props ={
  textSubmit : string
}

CC1 -From Handle
- FN contact Event is called "onSubmit"
- FN was called by Browser (when?) by send parameter 1 option (event Object)
- all Default  in <from> it do to submit
- Sole: declare type of button
      <Button type='button'>1</Button>
          <Button type='Submit' >2</Button>
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(true);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log('submit');
    setIsError(!isError);

  };

  const handleCancele = function (event) {
    event.preventDefault();
    console.log('cancele');

  };
  return (

    <form onSubmit={handleSubmit}
      className={styles.todo__form__container}

    >
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (<p className={styles.todo__error}>Title is required</p>) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text='Cancel'
            active={false}
            type="button"
            onClick={handleCancele} />
          <Button
            text={props.textSubmit}
            active={true}
            type='Submit' />
          {/* <button type='button' onClick={handleCancel}> POC</button> */}
        </div>
      </div>
    </form >
  );
}

export default TodoForm;

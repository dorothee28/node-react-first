import React from 'react';
import './NewGoal.css';
import { useState } from 'react';

const NewGoal = (props) => {
   const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
       };

      setEnteredText('');

       props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
      setEnteredText(event.target.value);
    }

    return (  
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input className="input-goal"
             placeholder="Enter your new goal" 
             type="text"
             value={enteredText}
            onChange={textChangeHandler}
             />
            <button className="button-goal" type="submit"> Add Goal</button>
        </form>
    );
}
 
export default NewGoal;
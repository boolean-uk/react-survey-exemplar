import React, { useState } from 'react';
import CheckBoxes from './CheckBoxes';
import RadioButtons from './RadioButtons';

export default function AnswerForm() {
  const [state, setState] = useState({ rating: 0, time: '' });

  const stateSetter = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  const duckColorRating = (e) => {
    stateSetter('rating', e.target.value);
  };

  const spendingTime = (e) => {
    stateSetter('time', e.target.value);
  };

  console.log(state);

  return (
    <form class="form" onSubmit={(e) => submitForm(e)}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons duckColorRating={duckColorRating} />
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBoxes spendingTime={spendingTime} />
      </div>
      <label>
        What else have you got to say about your rubber duck?<textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

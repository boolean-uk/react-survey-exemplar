import React, { useState } from 'react';
import CheckBoxes from './CheckBoxes';
import RadioButtons from './RadioButtons';

export default function AnswerForm({ submitForm }) {
  const [state, setState] = useState({ colour: 0, timeSpent: [], review: '', username: '', email: '' });

  const stateSetter = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  const duckColorRating = (e) => {
    stateSetter('colour', e.target.value);
  };

  const spendingTime = (e) => {
    stateSetter(
      'timeSpent',
      !state.timeSpent.includes(e.target.value)
        ? [...state.timeSpent, e.target.value]
        : [...state.timeSpent].filter((item) => item !== e.target.value)
    );
  };

  const addText = (e) => {
    stateSetter('review', e.target.value);
  };

  const addName = (e) => {
    stateSetter('username', e.target.value);
  };

  const addEmail = (e) => {
    stateSetter('email', e.target.value);
  };

  return (
    <form class="form" onSubmit={(e) => submitForm(e, state)}>
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
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" onChange={(e) => addText(e)}></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={state.username} onChange={(e) => addName(e)} />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={state.email} onChange={(e) => addEmail(e)} />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

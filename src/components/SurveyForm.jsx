import { useState } from 'react'

const defaultAnswers = {
  colour: '',
  timeSpent: [],
  noTime: false,
  review: '',
  username: '',
  submitterEmail: ''
}

const SurveyForm = ({ addAnswer }) => {
  const [answers, setAnswers] = useState(defaultAnswers)
  const onFormSubmit = (event) => {
    event.preventDefault()
    addAnswer(answers)
    setAnswers(() => defaultAnswers)
    event.target.reset()
  }

  const updateAnswer = (property, value) => {
    setAnswers((prevAnswers) => {
      const updated = { ...prevAnswers }
      updated[property] = value
      return updated
    })
  }

  const updateTimeSpent = (value) => {
    const add = !answers.timeSpent.includes(value)
    const updated = add
      ? [...answers.timeSpent, value]
      : [...answers.timeSpent].filter((item) => item !== value)

    updateAnswer('timeSpent', updated)
  }

  return (
    <form onSubmit={onFormSubmit} className='form'>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              id='color-one'
              type='radio'
              name='color'
              value='1'
              checked={answers.colour === 1}
              onChange={() => updateAnswer('colour', 1)}
            />
            <label htmlFor='color-one'>1</label>
          </li>
          <li>
            <input
              id='color-two'
              type='radio'
              name='color'
              value='2'
              checked={answers.colour === 2}
              onChange={() => updateAnswer('colour', 2)}
            />
            <label htmlFor='color-two'>2</label>
          </li>
          <li>
            <input
              id='color-three'
              type='radio'
              name='color'
              value='3'
              checked={answers.colour === 3}
              onChange={() => updateAnswer('colour', 3)}
            />
            <label htmlFor='color-three'>3</label>
          </li>
          <li>
            <input
              id='color-four'
              type='radio'
              name='color'
              value='4'
              checked={answers.colour === 4}
              onChange={() => updateAnswer('colour', 4)}
            />
            <label htmlFor='color-four'>4</label>
          </li>
        </ul>
      </div>
      <div className='form__group'>
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
                name='spend-time'
                type='checkbox'
                value='swimming'
                checked={answers.timeSpent.swimming}
                onChange={() =>
                  updateTimeSpent('swimming')
                }
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name='spend-time'
                type='checkbox'
                value='bathing'
                checked={answers.timeSpent.bathing}
                onChange={() =>
                  updateTimeSpent('bathing')
                }
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name='spend-time'
                type='checkbox'
                value='chatting'
                checked={answers.timeSpent.chatting}
                onChange={() =>
                  updateTimeSpent('chatting')
                }
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name='spend-time'
                type='checkbox'
                value='noTime'
                checked={answers.timeSpent.noTime}
                onChange={() =>
                  updateTimeSpent('noTime')
                }
              />
              I don't like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name='review'
          cols='30'
          rows='10'
          onChange={(e) => updateAnswer('review', e.target.value)}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type='text'
          name='username'
          defaultValue=''
          onChange={(e) => updateAnswer('username', e.target.value)}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type='email'
          name='email'
          defaultValue=''
          onChange={(e) => updateAnswer('submitterEmail', e.target.value)}
        />
      </label>
      <input className='form__submit' type='submit' value='Submit Survey!' />
    </form>
  )
}

export default SurveyForm

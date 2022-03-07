import React from 'react';

export default function RadioButtons({ duckColorRating }) {
  return (
    <ul>
      <li>
        <input id="color-one" type="radio" name="color" value="1" onChange={(e) => duckColorRating(e)} />
        <label for="color-one">1</label>
      </li>
      <li>
        <input id="color-two" type="radio" name="color" value="2" onChange={(e) => duckColorRating(e)} />
        <label for="color-two">2</label>
      </li>
      <li>
        <input id="color-three" type="radio" name="color" value="3" onChange={(e) => duckColorRating(e)} />
        <label for="color-three">3</label>
      </li>
      <li>
        <input id="color-four" type="radio" name="color" value="4" onChange={(e) => duckColorRating(e)} />
        <label for="color-four">4</label>
      </li>
    </ul>
  );
}

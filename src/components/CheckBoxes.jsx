import React from 'react';

export default function CheckBoxes({ spendingTime }) {
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="swimming" onChange={(e) => spendingTime(e)} />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="bathing" onChange={(e) => spendingTime(e)} />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="chatting" onChange={(e) => spendingTime(e)} />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="noTime" onChange={(e) => spendingTime(e)} />I don't like to
          spend time with it
        </label>
      </li>
    </ul>
  );
}

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [chosenElement, chosenGood] = useState(goods[8]);
  const [reset, onReset] = useState(true);

  const clear = () => {
    chosenGood(goods[-1]);

    onReset(prevState => !prevState);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        { chosenElement === goods[-1]
          ? 'No goods selected'
          : `${chosenElement} is selected` }
        {reset
          ? (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="button"
              onClick={clear}
            />
          )
          : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => {
            return (
              <tr
                data-cy="Good"
                className={` ${chosenElement === item ? 'has-background-success-light' : ''}`}
                key={item}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button  ${chosenElement === item ? 'is-info' : ''}`}
                    onClick={() => {
                      chosenGood(item);
                      onReset(true);
                    }}
                  >
                    {chosenElement === item ? '-' : '+'}
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

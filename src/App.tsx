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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const goodsList = goods.map(good => (
    <tr
      data-cy="Good"
      key={good}
      className={
        (selectedGood === good)
          ? ('has-background-success-light')
          : ''
      }
    >
      <td>
        {
          (selectedGood !== good)
            ? (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => setSelectedGood(good)}
              >
                +
              </button>
            )
            : (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={() => setSelectedGood('')}
              >
                -
              </button>
            )
        }

      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  ));

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          (!selectedGood
            ? 'No good is selected'
            : `${selectedGood} is selected`
          )
        }

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goodsList}
        </tbody>
      </table>
    </main>
  );
};

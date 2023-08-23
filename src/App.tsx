import React, { useState } from 'react';
import classNames from 'classnames';
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
  const [selectedGood, selectGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            title="Clear selected good"
            aria-label="Clear selected good"
            onClick={() => selectGood('')}
          />
        )}

      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    selectedGood === good ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={classNames(
                    'button', { 'is-info': selectedGood === good },
                  )}
                  onClick={() => selectGood(good)}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

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

  const clear = () => {
    setSelectedGood('');
  };

  return (

    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        { !selectedGood.length
          ? 'No goods selected'
          : `${selectedGood} is selected`}
        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            aria-label="button"
            onClick={clear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => {
            return (
              <tr
                data-cy="Good"
                className={` ${selectedGood === item ? 'has-background-success-light' : ''}`}
                key={item}
              >
                <td>
                  {selectedGood === item
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          clear();
                        }}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          setSelectedGood(item);
                        }}
                      >
                        +
                      </button>
                    )}
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

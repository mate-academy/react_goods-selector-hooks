import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  const [selectedItem, setSelectedItam] = useState('Jam');

  const itemSelected = (item: string) => {
    setSelectedItam(item);
  };

  return (
    <main className="section container">
      {selectedItem === ''
        ? (
          <h1 className="title">No goods selected</h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedItem} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => itemSelected('')}
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedItem === good,
              })}
            >
              <td>
                {selectedItem === good
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => itemSelected('')}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => itemSelected(good)}
                    >
                      +
                    </button>
                  )}
              </td>

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

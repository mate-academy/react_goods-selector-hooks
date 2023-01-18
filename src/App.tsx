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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelect = (good: string) => {
    setSelectedGood(good);
  };

  const handleRemove = () => setSelectedGood('');

  return (
    <main className="section container">
      {selectedGood !== '' ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' '}
          is selected
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={handleRemove}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isActive = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({ 'has-background-success-light': isActive })}
              >
                <td>
                  <button
                    data-cy={cn(
                      { AddButton: !isActive },
                      { RemoveButton: isActive },
                    )}
                    type="button"
                    className={cn('button', {
                      'is-info': isActive,
                    })}
                    onClick={() => (
                      isActive ? handleRemove() : handleSelect(good)
                    )}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

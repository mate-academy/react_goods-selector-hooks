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

  const handleRemoveGood = () => setSelectedGood('');
  const handleGoodToggle = (good: string, isGoodSelected: boolean): void => {
    if (isGoodSelected) {
      handleRemoveGood();
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      { selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleRemoveGood}
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      ) }

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isGoodSelected
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    onClick={() => handleGoodToggle(good, isGoodSelected)}
                    className={cn(
                      'button',
                      {
                        'is-info': isGoodSelected,
                      },
                    )}
                  >
                    {isGoodSelected
                      ? '-'
                      : '+'}
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

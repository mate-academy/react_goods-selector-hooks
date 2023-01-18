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
  const [activeGood, setActiveGood] = useState('Jam');

  return (
    <main className="section container">
      {activeGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${activeGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              title="clear"
              onClick={() => setActiveGood('')}
            />
          </h1>
        )
        : (
          <h1 className="title">No goods selected</h1>
        )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isActive = activeGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn(
                  { 'has-background-success-light': isActive },
                )}
              >
                <td>
                  <button
                    data-cy={cn(
                      { AddButton: !isActive },
                      { RemoveButton: isActive },
                    )}
                    type="button"
                    className={cn(
                      'button',
                      { 'is-info': isActive },
                    )}
                    onClick={() => (
                      isActive
                        ? setActiveGood('')
                        : setActiveGood(good)
                    )}
                  >
                    {
                      isActive
                        ? '-'
                        : '+'
                    }
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

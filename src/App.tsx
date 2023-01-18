import React, { useState } from 'react';
import cn from 'classnames';

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

interface Button {
  data: string
  class: string
  action: () => void
  symbol: string
}

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearSelected = () => setSelectedGood('');
  const isSelected = (good: string) => selectedGood === good;

  const getButtonProps = (good: string): Button => ({
    true: {
      data: 'RemoveButton',
      class: 'button is-info',
      action: clearSelected,
      symbol: '-',
    },

    false: {
      data: 'AddButton',
      class: 'button',
      action: () => setSelectedGood(good),
      symbol: '+',
    },
  })[`${isSelected(good)}`];

  return (
    <main className="section container">
      <h1
        className={cn('title', {
          'is-flex is-align-items-center': selectedGood,
        })}
      >
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearSelected}
              />
            </>
          ) : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const button = getButtonProps(good);

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected(good),
                })}
              >
                <td>
                  <button
                    type="button"
                    data-cy={button.data}
                    className={button.class}
                    onClick={button.action}
                  >
                    {button.symbol}
                  </button>

                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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

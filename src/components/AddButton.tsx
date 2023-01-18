import { FC } from 'react';
import cn from 'classnames';

type Props = {
  good: string,
  isSelected: boolean,
  handleGoodToggle: (good: string, isSelected: boolean) => void,
};

export const AddButton: FC<Props> = ({
  good,
  isSelected,
  handleGoodToggle,
}) => {
  return (
    <button
      data-cy={isSelected
        ? 'RemoveButton'
        : 'AddButton'}
      type="button"
      onClick={() => handleGoodToggle(good, isSelected)}
      className={cn(
        'button',
        {
          'is-info': isSelected,
        },
      )}
    >
      {isSelected
        ? '-'
        : '+'}
    </button>
  );
};

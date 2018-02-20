// @flow
import React from 'react';

import { getSizeClasses } from '../../utils/icon-helpers';

type Props = {
  size: Object,
};

const Close = (props: Props) => {
  const className = `stroke-current text-black ${getSizeClasses(props.size)}`;

  return (
    <svg
      className={className}
      style={{ strokeLinecap: 'round', strokeWidth: 2 }}
      viewBox="0 0 40 40"
    >
      <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
    </svg>
  );
};

Close.defaultProps = {
  size: { sm: 'full' },
}

export default Close;

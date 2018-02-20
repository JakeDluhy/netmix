// @flow
import React from 'react';
import classnames from 'classnames';

import { getSizeClasses } from '../../utils/icon-helpers';

type Props = {
  size: Object,
  isFilled: boolean,
};

const Star = (props: Props) => {
  const sizeClasses = getSizeClasses(props.size);
  const className = classnames(`text-green-darker`, sizeClasses, {
    'stroke-current': !props.isFilled,
    'stroke-current fill-current': props.isFilled,
  });

  const style = props.isFilled ? {} : { fill: 'none' };

  return (
    <svg className={sizeClasses} viewBox='0 0 24 24'>
      <polygon
        className={className}
        style={style}
        strokeWidth='2'
        points='5 21 8 14 3 9 9 9 12 3 15 9 21 9 16 14 19 21 12 17'
      />
    </svg>
  );
};

Star.defaultProps = {
  size: 'full',
};

export default Star;

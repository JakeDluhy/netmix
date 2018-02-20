// @flow
import React from 'react';
import _ from 'lodash';

import Star from '../icons/Star';

type Props = {
  rating: number,
  starSize: Object,
};

export default (props: Props) => (
  <div>
    {_.range(4).map((n) => (
      <Star key={n} isFilled={n < props.rating} size={props.starSize} />
    ))}
  </div>
);

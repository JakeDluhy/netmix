// @flow
import _ from 'lodash';

export function getSizeClasses(sizeObject: object): string {
  return _.reduce(sizeObject, (str, val, key) => {
    const prefix = key === 'all' ? '' : `${key}:`;
    return `${str} ${prefix}h-${val} ${prefix}w-${val}`;
  }, '');
}

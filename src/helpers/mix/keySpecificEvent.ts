import React from 'react'

export const keySpecificEvent = <T extends HTMLElement>(
  fn: Function,
  keys: Array<React.KeyboardEvent<T>['key']>
) => {
  return (e: React.KeyboardEvent<T>) => {
    if (keys.includes(e.key)) {
      fn()
    }
  }
}

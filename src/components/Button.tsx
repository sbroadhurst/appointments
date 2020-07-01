// @flow strict

import * as React from 'react'

interface Props {
  text: string
  width: number | string
  height: number | string
  type: string
  f?: any
}

function Button(props: Props) {
  const { text, type, height, width, f } = props

  return (
    <button
      onClick={() => f()}
      type="button"
      style={{
        width,
        height,
        background: type === 'contact' ? '#296ACB' : '#C4C4C4',
        color: type === 'contact' ? '#FFFFFF' : '#000000',
        cursor: 'pointer',
        margin: '10px',
        maxWidth: '500px',
      }}>
      {text}
    </button>
  )
}

export default Button

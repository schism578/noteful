import React from 'react';
import './nav-button.css';

export default function NavButton(props) {
  const { tag, className, children, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavButton.defaultProps ={
  tag: 'a',
}
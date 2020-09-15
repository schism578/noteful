import React from 'react';
import PropTypes from 'prop-types';
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

NavButton.propTypes = {
  tag: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  match: PropTypes.object
}
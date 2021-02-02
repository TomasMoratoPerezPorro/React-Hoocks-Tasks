import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShow, isOpen }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={onShow}
        color={isOpen ? 'red' : 'green'}
        text={isOpen ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker'
};

Header.propTypes = {
  title: PropTypes.string
  //title: PropTypes.string.isRequired
};

/* const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}; */

export default Header;

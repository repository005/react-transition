import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {
  
  return (
    <div>
      Template
    </div>
  );
};

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother: PropTypes.string.isRequired
}

export default UserTemplate;
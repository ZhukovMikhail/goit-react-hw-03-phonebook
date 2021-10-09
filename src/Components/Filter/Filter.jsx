import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </label>
  );
};
export default Filter;

Filter.prototype = {
  input: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filterValue: PropTypes.string,
  onFilterChange: PropTypes.func,
};

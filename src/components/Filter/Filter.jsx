import styles from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions/filterActions';

const Filter = () => {
  const { filterField, filterText, filterInput } = styles;

  const dispatch = useDispatch();

  const filterValue = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={filterField}>
      <p className={filterText}>Find contact by name</p>
      <input className={filterInput} type="text" onChange={filterValue} placeholder="Enter name..." />
    </div>
  );
};

export default Filter;
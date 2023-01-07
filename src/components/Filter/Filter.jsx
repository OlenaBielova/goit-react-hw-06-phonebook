import React from 'react';
import PropTypes from 'prop-types';
import { SearchByName, SearchInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <SearchByName>
      Find contact by name
      <SearchInput
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </SearchByName>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

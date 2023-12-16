import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <FormSearch onSubmit={onSubmit}>
        <BtnSearch type="submit">
          <FaSearch
            size={40}
            color="gray"
            onMouseOver={({ target }) => (target.style.color = 'black')}
            onMouseOut={({ target }) => (target.style.color = 'gray')}
          />
        </BtnSearch>

        <InputSearch type="text" placeholder="Search movie" name="inputValue" />
      </FormSearch>
    </Header>
  );
};
export default SearchBar;

const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormSearch = styled.form`
  border: 3px solid gray;
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;
const InputSearch = styled.input`
  background: gray;
  color: white;
  width: 87%;
  height: 50px;
  border: none;
  outline: transparent;
  font-size: 24px;
  padding-left: 10px;
`;

const BtnSearch = styled.button`
  background: white;
  border: none;
  outline: transparent;
  height: 52px;
  width: 10%;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: transparent;
    transform: scale(1.1);
  }
`;

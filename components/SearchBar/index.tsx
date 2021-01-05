// Core
import { ChangeEvent, useState } from 'react';
import styled from "@emotion/styled";

// Types
type SearchBarPropsTypes = {
  placeholder: string;
}

// Styled components
const Label = styled('label')`
  position: relative;
  width: 70%;
  margin: auto;
  margin-left: 0.5rem;

  @media (min-width: 780px) {
    width: 500px;
    margin: auto 0 auto 1.6rem;
  }
`

const Button = styled('button')`
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.20001 0.600006C9.2928 0.600006 11.8 3.10721 11.8 6.20001C11.8 7.46111 11.3831 8.62485 10.6797 9.56095L10.7236 9.59526L10.7657 9.63432L13.1657 12.0343C13.4781 12.3467 13.4781 12.8533 13.1657 13.1657C12.8773 13.4541 12.4235 13.4763 12.1097 13.2322L12.0343 13.1657L9.63432 10.7657C9.60696 10.7383 9.58199 10.7095 9.55942 10.6794C8.62485 11.3831 7.46111 11.8 6.20001 11.8C3.10721 11.8 0.600006 9.2928 0.600006 6.20001C0.600006 3.10721 3.10721 0.600006 6.20001 0.600006ZM6.20002 2.2C3.99088 2.2 2.20002 3.99086 2.20002 6.2C2.20002 8.40914 3.99088 10.2 6.20002 10.2C8.40916 10.2 10.2 8.40914 10.2 6.2C10.2 3.99086 8.40916 2.2 6.20002 2.2Z' fill='black' fill-opacity='0.5'/%3E%3C/svg%3E%0A");
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 7px;
  left: 9px;
  padding: 14px;
  border: none;
  cursor: pointer;
`

const Input = styled('input')`
  width: 100%;
  min-height: 43px;
  background-color: #FFFFFF;
  border: 1px solid transparent;
  outline: none;
  border-radius: 67px;
  padding: 10px 40px;
  font-size: 0.65rem;
  color: #6F6F6F;
  transition: 0.2s;

  :hover, :focus {
    border: 2px solid #2E71F3;
  }
`

// Component
export function SearchBar(props: SearchBarPropsTypes) {
  const { placeholder } = props;
  const [searchValue, setSearchValue] = useState('');

  function searchHandler({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setSearchValue(value);
  }

  return (
    <Label>
      <Button type="submit" />
      <Input
        type="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={searchHandler}
      />
    </Label>
  );
}
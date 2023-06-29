import React from 'react';
import { searchItem } from '../../../../types/ui/collection';
import SearchBlock from './SearchBlock';
import './searchcontainer.scss';
interface SearchComponentProps {
  array: searchItem[] | undefined;
}
const SearchComponent = ({ array }: SearchComponentProps) => {
  return (
    <div className="searchComponentContainer">
      {array?.map((ele, id) => (
        <SearchBlock element={ele} key={id} />
      ))}
    </div>
  );
};

export default SearchComponent;

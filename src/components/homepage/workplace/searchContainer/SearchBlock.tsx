import React from 'react';
import { searchItem } from '../../../../types/ui/collection';
import './searchcontainer.scss';
import { useNavigate } from 'react-router-dom';

interface SearchBlockProps {
  element: searchItem;
  key: number;
}
function SearchBlock({ element }: SearchBlockProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/element?search=${element.data[0].nasa_id}`);
  };
  return (
    <div className="searchBlock" onClick={handleClick}>
      <img src={element.links[0].href} alt="" className="searchBlockImg" />
      <div className="searchBlockTitleContainer">
        <p>{element.data[0].title}</p>
        <p>{element.data[0].location}</p>
        <p>{element.data[0].date_created}</p>
      </div>
    </div>
  );
}

export default SearchBlock;

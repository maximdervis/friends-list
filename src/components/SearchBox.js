import React from 'react';
import './SearchBox.css'

const SearchBox = ({onSearchFieldChange}) =>
{
	return(
		<div className="pa2">
			<input 
			onChange={onSearchFieldChange} 
			className="mb2 pa3 searchBox ba b--green" 
			type="search" 
			placeholder="search for friends"/>
		</div>
	);
}

export default SearchBox;
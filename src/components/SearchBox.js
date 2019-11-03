import React from 'react';

const SearchBox = ({onSearchFieldChange}) =>
{
	return(
		<div className="pa2">
			<input 
			onChange={onSearchFieldChange} 
			className="mb2 pa3 bg-lightest-blue ba b--green" 
			type="search" 
			placeholder="search for friends"/>
		</div>
	);
}

export default SearchBox;
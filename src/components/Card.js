import React from 'react';

const Card = ({name, email, id}) =>
{
	return(
		<div className="tc bg-light-green dib pa3 ma2 br3 shadow-5 grow">
			<img src={`https://robohash.org/${id}?200x200`} alt="my friend"/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
import React from 'react';
import './Card.css'

const Card = ({name, email, id}) =>
{
	return(
		<div className="tc card dib pa3 ma2 br3 shadow-5 grow">
			<img src={`https://robohash.org/${id}?200x200`} alt="my friend"/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
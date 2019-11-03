import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>
{
	return(
		<div className="pv2">
			{
				robots.map((robot, i) => 
				{
					return <Card 
					name={robot.name} 
					email={robot.email} 
					id={robot.id} 
					key={robot.id} />
				})
			}
		</div>
	);

}

export default CardList;
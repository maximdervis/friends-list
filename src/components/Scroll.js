import React from 'react';

const Scroll = ({children, height}) =>
{
	return(
		<div style={{overflow: 'auto', height: '750px', borderBottom: '3px solid rgb(0, 60, 60)', background: 'linear-gradient(to left, rgb(0, 94, 94), rgb(0, 128, 128))',}}>
			{children}
		</div>
	);
}

export default Scroll;
import React from 'react'

const Scroll = (props) =>
{
	return(
		<div style={{overflowY: 'scroll', height: '775px',}}>
			{props.children}
		</div>
	);
}
export default Scroll;
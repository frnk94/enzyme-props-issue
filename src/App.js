
import React from 'react';

function H1(props) {
	return <h1>{props.title}</h1>;
}

function App(props) {
	return (
		<div>
			<H1 title='h1'/>
			<div title='div'/>
		</div>
	);
}
module.exports = App;

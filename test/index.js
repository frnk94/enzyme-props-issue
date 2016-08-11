/* global describe before it expect */

import React from 'react'
import { mount } from 'enzyme';
import App from '../src/App.js';

let node;
let wrapper;

describe('Integration tests', () => {

	before('Initialize DOM', () => {
		node = document.createElement('div');
		document.body.appendChild(node);
		wrapper = mount(<App />, { attachTo:node });
	});

	it('Should find a Component based on props', () => {
		expect(wrapper.findWhere(n => n.props().title === 'h1')).to.have.length(1);
	});

	it('Should find a Component based on props via selector', () => {
		expect(wrapper.find({ title:'h1' })).to.have.length(1);
		expect(wrapper.find('[title="h1"]')).to.have.length(1);

	});

	it('Should find a Dom Element based on props via selector', () => {
		expect(wrapper.find({ title:'div' })).to.have.length(1);
		expect(wrapper.find('[title="div"]')).to.have.length(1);
	});
});

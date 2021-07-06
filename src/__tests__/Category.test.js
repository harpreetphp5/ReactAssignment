import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Category from '../category/Category';

it('renders without crashing', () => {

    expect(<Category />).toMatchSnapshot();
});
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartHeader from '../cart/CartHeader';

it('renders without crashing', () => {

    expect(<CartHeader />).toMatchSnapshot();
});
import React from 'react';
import Banner from '../nav/Banner';
import LoadProducts from './LoadProducts';
import './Category.css';



const Category = (props) => {

    return (
        <div>
            <Banner />
            <div className="Category">
                <LoadProducts />
            </div>
        </div>
    )
}

    

export default Category;


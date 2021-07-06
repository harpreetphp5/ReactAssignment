import React from 'react';
import { Link, Route } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner" style={{
            backgroundImage: `url('./media/plates-header.jpg')`
        }}>
            <div className="infoPlates">
                <h1>Plates</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.</p>
            </div>

        </div>
    )
}

export default Banner;
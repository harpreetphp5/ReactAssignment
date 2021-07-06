import React from 'react';
import { Link, Route } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="Nav-header">
            <Link to="/" className="LinkStyle">HOME</Link>
            <Link to="/shop" className="LinkStyle">SHOP</Link>
            <Link to="/journal" className="LinkStyle">JOURNAL</Link>
            <Link to="/more" className="LinkStyle">MORE</Link>
         </header>
    )
}

export default Navigation;
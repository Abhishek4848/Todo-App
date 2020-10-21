import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home(){
    return(
        <div>
        <header className="header">
        <h1>My Todo</h1>
        </header>
        <span className="btn">
        <Link to ="/Todo"><button className="button">See my TODO list</button></Link>
        </span>
        </div>
    )
}

export default Home;
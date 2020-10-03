import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to ="/Todo">Click here to see your TODO list</Link>
        </div>
    )
}

export default Home;
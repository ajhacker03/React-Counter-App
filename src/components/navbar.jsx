import React from 'react';


const NavBar = (props) => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href='/'>
                Counters <span className="badge badge-pill badge-primary">{props.totalCount}</span>
            </a>
        </nav>
    );
}

export default NavBar;

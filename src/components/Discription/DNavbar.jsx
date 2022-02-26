import React from 'react';
import './Dnavbar.css';
let DNavbar =()=>{
    return(
        <>
        <div class="navbar">
        <navbar class="Description-navbar">
            <ul class="nav-list">
                <li class="nav-item active"><a>Problem</a></li>
                <li class="nav-item"><a>Submissions</a></li>
                <li class="nav-item"><a>Leaderboard</a></li>
                <li class="nav-item"><a>Discussion</a></li>
            </ul> 
        </navbar>
    </div>
        </>
    )
}

export default DNavbar;
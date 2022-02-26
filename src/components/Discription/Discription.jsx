import React from 'react';
import './Desc.css';
import DNavbar from './DNavbar.jsx';
let Discription=()=>{
    return (
        <>
        <DNavbar/>
        <div className="problem">
            <div className="problem-disc">
            <p>Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it. </p>
            <p>Lily decides to share a contiguous segment of the bar selected such that: </p>
        <ul>
        <li>The length of the segment matches Ron's birth month, and,</li>
        <li>The sum of the integers on the squares is equal to his birth day.</li>
        </ul>
        
        <p>Determine how many ways she can divide the chocolate.</p>
        
        <p>
            <strong>Example</strong> <br/>
            
        <span >s = [2,2,1,3,2]</span> <br/>
        <span>d = 2</span> 
        </p>
        
        <p>Lily wants to find segments summing to Ron's birth day,<span >
            Lily wants to find segments summing to Ron's birth day,d = 4 with a length equalling his birth month, m = 2 . In this case, there are two segments meeting her criteria: [2,2]  and [1,3]
        </span>.</p>
        
        <p><strong>Function Description</strong></p>
        
        <p>Complete the <em>birthday</em> function in the editor below.    </p>
        
        <p>birthday has the following parameter(s):  </p>
        
        <ul>
        <li><em>int s[n]:</em> the numbers on each of the squares of chocolate  </li>
        <li><em>int d:</em> Ron's birth day  </li>
        <li><em>int m:</em> Ron's birth month  </li>
        </ul>
        
        <p><strong>Returns</strong>   </p>
        
        <ul>
        <li><em>int:</em> the number of ways the bar can be divided  </li>
        </ul>
        </div>
            <div className="inut-format"></div>
            <div className="constraints"></div>
            <div className="sample-input"></div>
            <div className="sample-output"></div>
            <div className="explanation"></div>
        </div>
        </>
    )
}

export default Discription;

import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import Card from './Card';
import Sdata from './sdata';


function ncard(val) {
    return(
        <Card
                imgsrc = {val.imagsrc}
                sname = {val.title}
                title = {val.sname}
        />
    );
}

ReactDOM.render(
    <>
        <h1 className='heading'>List of top 5 &nbsp; <span> Netflix</span>&nbsp; series in 2024</h1>

        <div className='cards'>

                {Sdata.map(ncard)}

        </div>
    </>
    ,document.getElementById('root')
);

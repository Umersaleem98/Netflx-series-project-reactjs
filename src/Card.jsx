import React from "react";


function Card(props) {
    return(
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt='myPic' className='card_img'/>

            <div className='card-info'>
                <span className='card_category'>{props.title}</span>
                <h3 className='card__title'>{props.sname}</h3>
                <a href='' target='_blank'>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    );
}


export default Card;

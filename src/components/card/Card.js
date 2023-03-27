/** @format */

import "./card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <i className={props.icon}></i>
      <div className='card-inner'>
        <p className='text-primary-p'>{props.text}</p>
        <span className='font-bold text-title'>{props.span}</span>
      </div>
    </div>
  );
};

export default Card;

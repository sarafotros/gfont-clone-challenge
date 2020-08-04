import React from 'react';
import '../styles/Card.css';
import { ReactComponent as Plus } from '../assets/plus.svg';

const Card = (props) => {
  let classes = `show-text ${props.fontInfo.fontClass}`;
  const { applyToAllBtn, handleClickApply } = props;

  const cardSelected = () => {
    props.cssCard(props.id);
  };

  return (
    <div className='card-container'>
      <div className='wrapper'>
        <div className='info-container'>
          <p className='font-name'>{props.fontInfo.fontName}</p>
          <p className='font-author'>{props.fontInfo.fontAuthor}</p>
        </div>
        <Plus className='plus' onClick={cardSelected} />
      </div>
      <textarea
        className={classes}
        type='text'
        onChange={props.textChangeHandlers}
        value={props.addBtn ? undefined : props.text}
      >
        {/* {props.text} */}
      </textarea>

      {applyToAllBtn.addBtn && (
        <button
          onClick={handleClickApply}
          style={{
            marginTop: 2,
            border: 'none',
            background: 'none',
            color: 'tomato',
            fontSize: 20,
            fontFamily: props.fontInfo.fontName,
            fontWeight: 'bolder',
            textShadow: '2px 2px 1px #e1e1e1',
            cursor: 'pointer',
          }}
        >
          Apply to all
        </button>
      )}
    </div>
  );
};

export default Card;

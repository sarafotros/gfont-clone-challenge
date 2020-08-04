import React from 'react';
import '../styles/Card.css';
import { ReactComponent as Plus } from '../assets/plus.svg';

const Card = (props) => {
  let classes = `show-text ${props.fontInfo.fontClass}`;
  const { applyToAllBtn, handleClickApply, handleClickReset } = props;

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
        <Plus className='plus' onClick={props.testClickHandle} />
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
        <div className='btn-style'>
          <button onClick={handleClickApply} style={btnStyle}>
            Apply to all
          </button>
          <button onClick={handleClickReset} style={btnStyle}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
const btnStyle = {
  marginTop: 2,
  border: 'none',
  background: 'none',
  outline: 'none',
  color: 'tomato',
  fontSize: 20,
  fontFamily: 'Open sans',
  fontWeight: 'bolder',
  textShadow: '2px 2px 1px #e1e1e1',
  cursor: 'pointer',
};

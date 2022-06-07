import React, { useContext } from 'react';
import '../Assets/Key.css';
import { AppContext } from '../App';

export default function Key({ keyVal, bigKey, disasble }) {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className='key'
      id={bigKey ? 'big' : disasble && 'disable'}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

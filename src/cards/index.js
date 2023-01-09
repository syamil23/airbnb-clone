import React from 'react';
import './home.css';
import Card from './card';
import Uluwatu from './uluwatu';
import Bali from './bali';
import Mengwi from './mengwi';
import Tabanan from './tabanan';
import Lovina from './lovina';

function Cards () {
  return (
    <div className='cards-flex'>
        <Card />
        <Uluwatu />
        <Bali />
        <Mengwi />
        <Tabanan />
        <Lovina />


    </div>
  )
}

export default Cards;
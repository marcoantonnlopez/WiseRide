import Image from 'next/image';
import React from 'react';

function DayCard() {
  return (
    <div className="dayCard" >
        <Image
            className="mb-4"
            src="/calendar.svg"
            alt="calendar"
            width={30}
            height={30}
        />
        <h1><span id='Otrodia'>00</span> / <span id='Otromes'>00</span> / <span id='Otroanio'>00</span></h1>
        <h3><span className="otroDistance">0000</span> km</h3>
    </div>

    );
}

export default DayCard;

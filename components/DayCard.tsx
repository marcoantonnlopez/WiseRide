import Image from 'next/image';
import React from 'react';
import moment from 'moment';

type DayCardProps = {
  index: number;
  onClick: (index: number) => void;
  date: moment.Moment;
};

function DayCard({ index, onClick, date }: DayCardProps) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div className="dayCard" onClick={handleClick}>
      <Image
        className="mb-4"
        src="/calendar.svg"
        alt="calendar"
        width={30}
        height={30}
      />
      <h1>
        <span id="Otrodia">{date.format('DD')}</span> / <span id="Otromes">{date.format('MM')}</span> /{' '}
        <span id="Otroanio">{date.format('YY')}</span>
      </h1>
      <h3>
        <span id="Otrodia">{date.format('dddd')}</span>
      </h3>
    </div>
  );
}

export default DayCard;
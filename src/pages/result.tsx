import Image from 'next/image';
import { Inter } from 'next/font/google';
import DayInfo from '../../components/dayInfo';
import InputBusqueda from '../../components/inputBusqueda'
import { useEffect, useState } from 'react';
import moment from 'moment';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  let cities = [
    {
      city: "San Luis Potosi",
      events: [],
      climate: [] 
    }, 
    {
      city: "New York",
      events: [],
      climate: [] 
    }
  ];

  let events = getAllEvents("San Luis Potosi");
  console.log(events);


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-white`}
    >
        <div className="header">
        <Image
          className="mb-4"
          src="/logo.svg"

          alt="Logo"
          width={50}
          height={50}
        />
        <InputBusqueda />
        </div>

      <DayInfo />
    </main>
  );
}



const getAllEvents = (cityArg: string): any[] => {
  const [events, setEvents] = useState<any[]>([]);
  const [city, setCity] = useState<string>(cityArg);

  useEffect(() => {
    fetch(`/api/events?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, [city]);

  return events;
};
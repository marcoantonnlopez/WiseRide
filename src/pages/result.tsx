import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import DayInfo from '../../components/dayInfo';
import InputBusqueda from '../../components/inputBusqueda';

const inter = Inter({ subsets: ['latin'] });

interface City {
  city: string;
  data: any;
  events: any[];
  climate: any[];
}

export default function Home() {

  const cityStart = "San Luis Potosi";
  const cityEnd = "New York";

  const [cities, setCities] = useState<City[]>([
    {
      city: cityStart,
      data: {},
      events: [],
      climate: [] 
    }, 
    {
      city: cityEnd,
      data: {},
      events: [],
      climate: [] 
    }
  ]);

  useEffect(() => {

    const fillCities = async (cities: City[]) => {
      const updatedCities: City[] = [];
      for (const current of cities) {
        try {
          const dataResponse = await fetch(`/api/data/${current.city}`);
          const climateResponse = await fetch(`/api/weather/${current.city}`);
          const eventsResponse = await fetch(`/api/events?city=${current.city}`);
        
          const cityData = await dataResponse.json();
          const climateData = await climateResponse.json();
          const eventsData = await eventsResponse.json();
        
          const updatedCity: City = {
            ...current,
            data: cityData,
            climate: climateData,
            events: eventsData,
          };

          updatedCities.push(updatedCity);
        } catch (error) {
          console.log(error);
        }
      }
      setCities(updatedCities); // Update the cities state with the fetched data
    };

    fillCities(cities);
  }, []);

  console.log(cities);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-white`}>
      <div className="header">
        <Image
          className="mb-4"
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />;
        <InputBusqueda />
      </div>
      <DayInfo cities={cities}/> {/* Pass the cities data as a prop */}
    </main>
  );
}
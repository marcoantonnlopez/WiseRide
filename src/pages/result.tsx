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
  const [cities, setCities] = useState<City[]>([
    {
      city: "San Luis Potosi",
      data: {},
      events: [],
      climate: [] 
    }, 
    {
      city: "New York",
      data: {},
      events: [],
      climate: [] 
    }
  ]);

  useEffect(() => {

    //get city array from rodrigo

    const fillCities = async (cities: City[]) => {
      for (const current of cities) {
        try {
          const dataResponse = await fetch(`/api/data/${current.city}`);
          const climateResponse = await fetch(`/api/weather/${current.city}`);
          //const eventsResponse
        
          const cityData = await dataResponse.json();
          const climateData = await climateResponse.json();
          //const eventsData
        
          current.data = cityData;
          current.climate = climateData;
          //city.events = eventsData;
        } catch (error) {
          console.log(error);
        }
      }
      setCities([...cities]); // Update the cities state with the fetched data
    };

    fillCities(cities);
    console.log(cities);
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className} bg-white`}>
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
      <DayInfo/> {/* Pass the cities data as a prop */}
    </main>
  );
}
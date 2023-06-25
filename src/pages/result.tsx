import Image from 'next/image';
import { Inter } from 'next/font/google';
import DayInfo from '../../components/dayInfo';
import InputBusqueda from '../../components/inputBusqueda'


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

import Image from 'next/image'
import { Inter } from 'next/font/google'
import InputBusqueda from '../../components/inputBusqueda'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-white`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col lg:flex">
        <Image
          className="mb-4"
          // src="../../imgs/logo.svg" // Reemplaza esto con la ruta de tu imagen
          // src="../../../../public/logo.svg"
          src="/logo.svg"

          alt="Logo"
          width={100}
          height={100}
        />
        <br />
        <h1 className = "slogan">Plan your trip without hassle!</h1>
        
        
        
        <InputBusqueda />

        <br /><br /><br />
        <Link href="/result">
        Ir a la página de resultado
      </Link>


        
      </div>
    </main>
  )
}

import Image from 'next/image';
import React from 'react';

function CityCard({ city, index }: { city: any, index: number }) {
    const cityName = city.city;
    const maxTemp = city.climate[index]?.maxTemp;
    const minTemp = city.climate[index]?.minTemp;
    const events = city.events[index];

  return (
    <div className="ciudadCard" >
        <h1 className="cityName">{cityName}</h1>
        <br />
            <div className="infCity">
                <Image
                    className="mb-4"
                    src="/cloud.svg"

                    alt="climate"
                    width={30}
                    height={30}
                />
                <p>  Max: <span className="climateCity">{maxTemp}</span> °C, Min: <span className="climateCity">{minTemp}</span> °C</p>
            </div>
            <div className="infCity">
                <Image
                    className="mb-4"
                    src="/eventos.svg"

                    alt="events"
                    width={30}
                    height={30}
                />
                <p>  Events: <span className="eventsCity">{events}</span></p>
            </div>
    </div>
    );
}

export default CityCard;

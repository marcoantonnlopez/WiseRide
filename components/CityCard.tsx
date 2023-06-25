import Image from 'next/image';
import React from 'react';

function CityCard() {
  return (
    <div className="ciudadCard" >
        <h1 className="cityName">CityName</h1>
        <br />
            <div className="infCity">
                <Image
                    className="mb-4"
                    src="/cloud.svg"

                    alt="climate"
                    width={30}
                    height={30}
                />
                <p>  Climate: <span className="climateCity">00.00</span> °C</p>
            </div>
            <div className="infCity">
                <Image
                    className="mb-4"
                    src="/eventos.svg"

                    alt="events"
                    width={30}
                    height={30}
                />
                <p>  Events: <span className="eventsCity">00</span></p>
            </div>
    </div>
    );
}

export default CityCard;

import React, { useState } from 'react';
import CityCard from './CityCard';
import DayCard from './DayCard';
import moment from 'moment';


function DayInfo({ cities }: { cities: any[] }) {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const handleDayCardClick = (index: number) => {
    setSelectedDayIndex(index);
  };

  let dates = [];
  for(let i = 0; i < 14; i++){
    const date = moment().add(i, 'days').startOf('day');
    dates.push(date);
  }

  const today = moment().startOf('day');

  return (
    <div className="dayInfo">
      <div className="map">
        <div className="distanceContainer">
          <h3 className="distTitle">Distance</h3>
          <h1 className="distanceNum">0000 <span>km</span></h1>
          <h4 className='day'><span id='dia'>{today.format('DD')}</span> / <span id='mes'>{today.format('MM')}</span> / <span id='anio'>{today.format('YY')}</span></h4>
        </div>
      </div>

<br />
    <div className="map2">
        {/* Aquí va a ir el mapa con el recorrido, hasta abajo hay un código comentado de lo que intenté hacer pero no supe, chale */}
    </div>

<br /><br />

    <h2 className="cityTitle">Cities to go </h2><br />
    <div className="cities">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            city={city}
            index={selectedDayIndex}
          />
        ))}
    </div>
    <br /><br />

    <h2 className="daysTitle">Other days to travel </h2><br />
    <div className="days">
      {dates.map((date, index) => (
            <DayCard
              key={index}
              date={date}
              index={index}
              onClick={handleDayCardClick}
            />
          ))}
    </div>

    </div>
  );
}

export default DayInfo;


// !!! SINTAXIS PARA IMPLEMENTAR EL API DE GOOGLE MAPS Y QUE ESTÉ COMO FONDO

// import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// const Map = () => {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     />
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function DayInfo() {
//   return (
//     <div className="dayInfo">
//       <div className="map" style={{ position: 'relative' }}>
//         <div 
//           className="distanceContainer"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             background: 'linear-gradient(to right, red, yellow)',
//             opacity: 0.5,
//             color: 'white',
//             zIndex: 1,
//           }}
//         >
//           <h3 className="distTitle">Distance</h3>
//           <h1 className="distanceNum">0000 <span>km</span></h1>
//         </div>
//         <WrappedMap 
//           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=TU_API_KEY`}
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `100%` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//     </div>
//   );
// }

// export default DayInfo;

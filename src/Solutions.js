import React, { useEffect , useState} from 'react';
import Navbar from './Navbar';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Solutions.css';
import californiaCounties from './rewound-geojson.json';


const Solutions = () => {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('12:00 PM');

  const handleDateChange = newDate => {
    setDate(newDate);
  };
  const handleTimeChange = event => {
    setTime(event.target.value);
  };
  // Manually defined temperature data for each county
  const countyTemperatures = {
    "Alameda County": 9.697216,
    "Alpine County": -4.369344,
    "Amador County": 5.2038727,
    "Butte County": 8.185719,
    "Calaveras County": 6.277188,
    "Colusa County": 8.046661,
    "Contra costa County": 8.649597,
    "Del norte County": 6.991961,
    "El dorado County": 2.772754,
    "Fresno County": 8.884501,
    "Glenn County": 8.077518,
    "Humboldt County": 8.741038,
    "Imperial County": 11.634914,
    "Inyo County": 0.62512666,
    "Kern County": 4.3367715,
    "Kings County": 8.161355,
    "Lake County": 7.126015,
    "Lassen County": 4.2868776,
    "Los angeles County": 6.6359224,
    "Madera County": 8.393582,
    "Marin County": 9.749501,
    "Mariposa County": 6.051532,
    "Mendocino County": 5.1739035,
    "Merced County": 9.020406,
    "Modoc County": 0.1374318,
    "Mono County": -2.3227162,
    "Monterey County": 9.361528,
    "Napa County": 8.232244,
    "Nevada County": 0.371774,
    "Orange County": 10.162272,
    "Placer County": 2.7723246,
    "Plumas County": -3.1196644,
    "Riverside County": 6.267447,
    "Sacramento County": 8.985159,
    "San benito County": 8.76616,
    "San bernardino County": 6.8110642,
    "San diego County": 9.262492,
    "San francisco County": 9.220946,
    "San joaquin County": 11.116944,
    "San luis obispo County": 9.035726,
    "San mateo County": 10.15786,
    "Santa barbara County": 9.350774,
    "Santa clara County": 10.268938,
    "Santa cruz County": 9.436521,
    "Shasta County": 2.729058,
    "Sierra County": -0.60795206,
    "Siskiyou County": -0.8238948,
    "Solano County": 10.605521,
    "Sonoma County": 10.177702,
    "Stanislaus County": 9.3825,
    "Sutter County": 9.364344,
    "Tehama County": 9.393224,
    "Trinity County": 3.86736,
    "Tulare County": 3.82174,
    "Tuolumne County": 1.4255931,
    "Ventura County": 7.6476073,
    "Yolo County": 8.927958,
    "Yuba County": 5.1790643
  };

  useEffect(() => {
    // Log county names from californiaCounties
    // console.log("Features from californiaCounties:", californiaCounties.features);

    // Log county names from countyTemperatures
    // console.log("County names from countyTemperatures:", Object.keys(countyTemperatures));
  }, []); // Run once on component mount

  const getColor = temp => {
    return temp > 95 ? '#800026' :
           temp > 85 ? '#BD0026' :
           temp > 25 ? '#E31A1C' :
           temp > 20 ? '#FC4E2A' :
           temp > 15 ? '#FD8D3C' :
           temp > 10 ? '#FEB24C' :
           temp > 5 ? '#FED976' :
                       '#FFEDA0';
  };

  const style = feature => {
    const countyName = feature.properties.NAME; // Access county name using properties.NAME
    const temp = countyTemperatures[countyName];
    const fillColor = temp ? getColor(temp) : '#FFEDA0'; // Default color if temperature data is not available
    return {
      fillColor: fillColor,
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };
  

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: e => {
        var layer = e.target;
        layer.setStyle({
          weight: 5,
          color: '#666',
          fillOpacity: 0.9
        });
      },
      mouseout: e => {
        e.target.setStyle(style(e.target.feature));
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="solutions-container">
        <div className="header-container">
          <div className="header-title">Heat Risk Forecasting</div>
          <p className="header-last-update">Last Update — 8:00am February 23, 2024</p>
        </div>
        <hr className="header-divider" />
        <div className="interactive-section">
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
            <div className="time-selector">
              <select value={time} onChange={handleTimeChange}>
                {[...Array(24)].map((_, index) => (
                  <option key={index} value={`${index % 12 || 12}:00 ${index < 12 ? 'AM' : 'PM'}`}>
                    {`${index % 12 || 12}:00 ${index < 12 ? 'AM' : 'PM'}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="model-image">
            <MapContainer center={[36.7783, -119.4179]} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={californiaCounties}
              style={style}
              onEachFeature={onEachFeature}
            />
          </MapContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

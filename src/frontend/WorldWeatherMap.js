
import { useState, useEffect } from "react";
import { WorldMap } from "react-svg-worldmap";

function WorldWeatherMap(inputdata) { 
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas([
      { country: inputdata.currentcity.iso2, value: inputdata.currentcity.lat },    
    ])
  }, [inputdata]);
  // setDatas(inputdata.currentcity.city, inputdata.currentcity.lat);
  // setDatas(inputdata.currentcity.city, inputdata.currentcity.weatherData);
  console.log(inputdata.currentcity);
  // console.log(inputdata.currentcity.city);
  // console.log(datas);

  // const currentData = inputdata.currentcity;
  // const data = [
  //   // { country: inputdata.currentcity.iso2, value: inputdata.currentcity.lat }, // india
  //   // { country: inputdata.currentcity.iso2, value: 55.6761 }, // india
  //   { country: 'FR', value: 55.6761 }, // india
    
  // ];
console.log(datas);
  const stylingFunction = (context: any) => { 
    // const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue)) / (context.maxValue - context.minValue);
    const opacityLevel = 0.9;

    return {
      fill: context.country === "ru" ? "blue" : context.color,
      fillOpacity: opacityLevel,
      stroke: "green",
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };
// title="Top 10 Populous Countries"
  return (  
              <WorldMap
          color="red"
          value-suffix="people"
          size="lg"
          data={datas}
          stylingFunction={stylingFunction}
          style={{color: "red", width:'100%'}}
        />
  );
}
export default WorldWeatherMap;
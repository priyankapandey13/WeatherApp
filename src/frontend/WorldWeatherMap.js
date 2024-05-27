
import { WorldMap } from "react-svg-worldmap";

function WorldWeatherMap() {
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "ca", value: 1311559204 }, // canada
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];
  const stylingFunction = (context: any) => {
    const opacityLevel =
      0.1 +
      (1.5 * (context.countryValue - context.minValue)) /
        (context.maxValue - context.minValue);
    return {
      fill: context.country === "US" ? "blue" : context.color,
      fillOpacity: opacityLevel,
      stroke: "green",
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

  return (
        <WorldMap
          color="red"
          // title="Top 10 Populous Countries"
          value-suffix="people"
          size="lg"
          data={data}
          stylingFunction={stylingFunction}
          style={{color: "red", width:'100%'}}
        />
  );
}
export default WorldWeatherMap;
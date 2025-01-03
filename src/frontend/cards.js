import { Button, Card } from "react-bootstrap";

function weatherCards(e) {
  const data = e.weatherData;
  return (
    <Card style={{ width: "100%" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>
          <h4>
            {data.city} ({data.country})
          </h4>
          <hr></hr>
        </Card.Title>
        {/* <Card.Text> */}
        startDate : <strong>{data.startDate}</strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp; Latitude :{" "}
        <strong>
          {data.lat} + Longitude: {data.long}
        </strong>
        <br></br>
        <hr></hr>
        {data.weatherData[0].prcpDisplayname} :{" "}
        <strong>
          {data.weatherData[0].prcp}
          {data.weatherData[0].prcpUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[0].tavgDisplayname} :{" "}
        <strong>
          {data.weatherData[0].tavg}
          {data.weatherData[0].tavgUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[0].tmaxDisplayname} :{" "}
        <strong>
          {data.weatherData[0].tmax}
          {data.weatherData[0].tmaxUnit}
        </strong>
        <br></br>
        {data.weatherData[0].tminDisplayname} :{" "}
        <strong>
          {data.weatherData[0].tmin}
          {data.weatherData[0].tminUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[0].wspdDisplayname} :{" "}
        <strong>
          {data.weatherData[0].wspd}
          {data.weatherData[0].wspdUnit}
        </strong>
        <hr></hr>
        {data.weatherData[1].prcpDisplayname} :{" "}
        <strong>
          {data.weatherData[1].prcp}
          {data.weatherData[1].prcpUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[1].tavgDisplayname} :{" "}
        <strong>
          {data.weatherData[1].tavg}
          {data.weatherData[1].tavgUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[1].tmaxDisplayname} :{" "}
        <strong>
          {data.weatherData[1].tmax}
          {data.weatherData[1].tmaxUnit}
        </strong>
        <br></br>
        {data.weatherData[1].tminDisplayname} :{" "}
        <strong>
          {data.weatherData[1].tmin}
          {data.weatherData[1].tminUnit}
        </strong>
        &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
        {data.weatherData[1].wspdDisplayname} :{" "}
        <strong>
          {data.weatherData[1].wspd}
          {data.weatherData[1].wspdUnit}
        </strong>
        {/* </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default weatherCards;

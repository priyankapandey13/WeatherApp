import { Button, Card } from "react-bootstrap";

function weatherCards(e) {
  const data = e.weatherData;
  return (
    <Card style={{ width: "100%" }}>
      {/* width: "30rem" */}
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>
          City : {data.city}({data.country})
        </Card.Title>
        <Card.Text>
          startDate: {data.startDate}
          <br></br>
          Latitude: {data.lat} + Longitude: {data.long}
          {/* <br></br> */}
          {/* Date : {data.weatherData[0].date} */}
          <br></br>
          {/* <hr></hr> */}
          {data.weatherData[0].prcpDisplayname}:{data.weatherData[0].prcp}
          {data.weatherData[0].prcpUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[0].tavgDisplayname}:{data.weatherData[0].tavg}
          {data.weatherData[0].tavgUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[0].tmaxDisplayname}:{data.weatherData[0].tmax}
          {data.weatherData[0].tmaxUnit}
          <br></br>
          {data.weatherData[0].tminDisplayname}:{data.weatherData[0].tmin}
          {data.weatherData[0].tminUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[0].wspdDisplayname}:{data.weatherData[0].wspd}
          {data.weatherData[0].wspdUnit}
          {/* <hr></hr> */}
          {data.weatherData[1].prcpDisplayname}:{data.weatherData[1].prcp}
          {data.weatherData[1].prcpUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[1].tavgDisplayname}:{data.weatherData[1].tavg}
          {data.weatherData[1].tavgUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[1].tmaxDisplayname}:{data.weatherData[1].tmax}
          {data.weatherData[1].tmaxUnit}
          <br></br>
          {data.weatherData[1].tminDisplayname}:{data.weatherData[1].tmin}
          {data.weatherData[1].tminUnit}
          &nbsp; &nbsp; &nbsp;|| &nbsp; &nbsp; &nbsp;
          {data.weatherData[1].wspdDisplayname}:{data.weatherData[1].wspd}
          {data.weatherData[1].wspdUnit}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default weatherCards;

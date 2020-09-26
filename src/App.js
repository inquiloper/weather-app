import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TodayForecast from './components/TodayForecast';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <>
        <Container fluid className="vh-100">
          <Row className="vh-100">
            <TodayForecast/>
            <WeatherForecast/>
          </Row>
        </Container>
    </>
  );
}

export default App;
